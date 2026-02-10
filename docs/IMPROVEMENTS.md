# 改善点一覧

このドキュメントはプロジェクトの改善点を4カテゴリに整理したものです。

## 1. ロジック

### マジックナンバーの散在（高）

`App.tsx` のナビゲーションロジックでハードコードされた数値が複数箇所に分散している。

```typescript
// App.tsx:17 - メニュー上限が "2" としてハードコード
setActiveMenuIndex((prev) => (prev < 2 ? prev + 1 : prev));

// App.tsx:27-28 - サブメニュー上限が "3" としてハードコード
const maxSubMenu = activeMenuIndex === 0 ? 3 : activeMenuIndex === 2 ? 3 : 0;
```

一方、DPadには `maxIndex={3}` を渡しており、DPad内部では `maxIndex - 1` で比較する。メニュー構造を変更するとき、更新が必要な箇所が分散していて壊れやすい。

### Content.tsx のフォールバック内のデータ不整合（中）

Content.tsx の `getLabel()` で Account サブメニューが `["Profile", "Career", "Hobby"]` と3つしかないが、実際には4つ（Profile, Skill, Career, Hobby）。ただしこのフォールバックパスには到達しない（上のif文で先にreturnされる）ため実害は少ないが、デッドコードとして残っている。

### Work.tsx の useEffect 依存配列問題（高）

```typescript
useEffect(() => {
  // setInterval 内で setCurrentIndex を呼び出す
  // → currentIndex が変わるたび effect が再実行される
  // → interval が破棄→再作成を300msごとに繰り返す
}, [currentIndex, cycle]);
```

`currentIndex` を依存配列に含めているため、interval コールバック内の `setCurrentIndex` がトリガーのたびにeffect全体が再実行される。意図通り動作しているように見えるが、interval の setup/teardown が毎回発生するのは非効率で、高負荷時にタイミングがずれるリスクがある。

### 状態更新の非原子性（中）

```typescript
// App.tsx - 2つの setState が別々に呼ばれる
setActiveMenuIndex((prev) => (prev < 2 ? prev + 1 : prev));
setActiveSubMenuIndex(0);
```

React 18のバッチングで通常問題にはならないが、論理的に1つの操作（メニュー遷移）が2つの独立したstate更新に分かれている。

---

## 2. アーキテクチャ

### メニュー設定が一元化されていない（高）

メニュー構造が以下に分散:
- `Menus.tsx`: メインメニュー3つの定義
- `Account.tsx`: サブメニュー4つの定義
- `Side.tsx` + `constants.tsx`: サブメニュー4つの定義
- `Content.tsx`: 全メニュー→コンポーネントのマッピングをif文で再定義
- `App.tsx`: 上下限の数値をハードコード

**改善案**: メニュー設定を1ファイルに集約

```typescript
const MENU_CONFIG = [
  { id: 'account', label: 'Account', icon: MdAccountCircle,
    submenus: [
      { id: 'profile', label: 'Profile', component: Profile },
      ...
    ]},
  ...
];
```

### Content.tsx のルーティングロジックが冗長（高）

60行以上の if/else チェーンがコンポーネント選択に使われている。すべてが同じ `<div className="content-display">` でラップされている。

```typescript
// 現状: 同じ構造を12回繰り返し
if (activeMenu === 0) {
  if (activeSubMenu === 0) return <div className="content-display"><Profile /></div>;
  if (activeSubMenu === 1) return <div className="content-display"><Skill /></div>;
  ...
}
```

### Account.tsx と Side.tsx の重複（中）

両コンポーネントはほぼ同一の構造: `subMenuItems` 配列を定義 → `.map()` でボタンリスト描画。汎用 `SubMenu` コンポーネントに統合可能。

### Side プロジェクト詳細ページの重複（中）

`WarSimGame.tsx`, `Tweet.tsx`, `StudyRecord.tsx`, `FFQuiz.tsx` はすべて `InfoBase` を使って同じパターン（Description, Skills, Links, Images）で構成されている。`InfoBase` に渡すデータを `constants.tsx` に集約すれば、4ファイルが不要になる。

### ナビゲーションロジックの分離不足（中）

App.tsx が状態管理とハンドラーロジックを全て保持。カスタムフックへの抽出が望ましい。

```typescript
// 改善案
function useMenuNavigation(config: MenuConfig) {
  const [activeMenu, setActiveMenu] = useState(0);
  const [activeSubMenu, setActiveSubMenu] = useState(0);
  // ハンドラーをconfigから導出
  return { activeMenu, activeSubMenu, handlers, limits };
}
```

### CSS アニメーションの重複（低）

`@keyframes fadeIn` が `index.css`, `App.css`, `Menus.css`, `Account.css`, `Career.css`, `Work.css`, `InfoBase.css` に重複定義されている。グローバルCSS に一度だけ定義すべき。

---

## 3. テスタビリティ

### テストフレームワーク未導入（高）

`package.json` に test スクリプトも Vitest/Jest も存在しない。テストゼロの状態。

### App.tsx がテスト困難（高）

ナビゲーションロジックがコンポーネント内にインライン定義されているため:
- ハンドラー単体のユニットテストが不可能
- テストするにはコンポーネント全体をマウントする必要がある
- `handleDPadUp` の境界チェックを検証するのにUI描画が必要

**改善案**: ロジックをカスタムフックに抽出すれば `renderHook` でテスト可能。

### Content.tsx のルーティングロジックがテスト困難（中）

if/else チェーンがコンポーネント内にあるため、「メニューインデックス(1,2)でWorkが表示される」というテストには全コンポーネントのimportが必要。ルーティングマップをデータとして分離すればテスト可能に。

### Work.tsx がテスト不可能に近い（高）

- `import.meta.glob` はビルド時に解決されるため、テスト環境でモック必須
- `setInterval` + `Math.random()` による非決定的な動作
- 4つの状態変数が連動して変化するため、特定の状態を再現困難

### 外部リンク先のバリデーションなし（低）

Profile.tsx, Career.tsx 等に外部URLがハードコードされている。リンク切れを検知する仕組みがない。

---

## 4. 開発持続性（CI/CD etc.）

### CI/CD パイプライン未設定（高）

GitHub Actions 等の設定ファイルが存在しない。PRマージ前に以下が自動検証されない:
- TypeScript型チェック (`pnpm compile`)
- ビルド成功 (`pnpm build`)
- Lint (`pnpm lint`)

**最低限の GitHub Actions 例**:
```yaml
# .github/workflows/ci.yml
on: [push, pull_request]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with: { node-version: 22, cache: pnpm }
      - run: pnpm install --frozen-lockfile
      - run: pnpm compile
      - run: pnpm build
      - run: pnpm lint
```

### Pre-commit フック未設定（中）

husky / lint-staged が未導入のため、lint エラーやconsole.logを含んだコードがコミットされうる。

### パスエイリアス未設定（低）

`tsconfig.json` に `paths` が未定義。import が相対パスで長くなりがち。

### デプロイ設定・ドキュメントなし（中）

- どこにデプロイするか（GitHub Pages, Vercel, etc.）の設定がない
- `vite.config.ts` に `base` オプション未設定（GitHub Pages等ではサブパスが必要）
- 環境変数管理なし（`.env.example` なし）

### 依存関係の脆弱性チェックなし（低）

`pnpm audit` や Dependabot/Renovate が未設定。

---

## 優先度まとめ

| 優先度 | 項目 | カテゴリ |
|--------|------|---------|
| **高** | CI パイプライン追加 (GitHub Actions) | 開発持続性 |
| **高** | メニュー設定の一元化 + マジックナンバー排除 | ロジック/アーキテクチャ |
| **高** | ナビゲーションロジックをカスタムフックに抽出 | アーキテクチャ/テスタビリティ |
| **高** | Vitest 導入 + 基本テスト追加 | テスタビリティ |
| **中** | Content.tsx のルーティングをデータ駆動に | アーキテクチャ |
| **中** | Account/Side を汎用 SubMenu に統合 | アーキテクチャ |
| **中** | Work.tsx の useEffect 依存配列修正 | ロジック |
| **中** | Pre-commit フック (husky + lint-staged) | 開発持続性 |
| **低** | CSS アニメーション重複の解消 | アーキテクチャ |
| **低** | パスエイリアス設定 | 開発持続性 |
