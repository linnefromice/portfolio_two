---
name: coding-standards
description: React 19 + TypeScript + Vite SPAのコーディング規約とベストプラクティス。
---

# コーディング規約とベストプラクティス

## コード品質の原則

### 1. 可読性優先
- コードは書くより読む回数の方が多い
- 明確な変数名と関数名
- コメントよりも自己文書化コードを優先
- 一貫したフォーマット

### 2. KISS（Keep It Simple, Stupid）
- 動く最もシンプルな解決策
- 過剰なエンジニアリングを避ける
- 早すぎる最適化をしない

### 3. DRY（Don't Repeat Yourself）
- 共通ロジックを関数に抽出
- 再利用可能なコンポーネントを作成
- コピペプログラミングを避ける

### 4. YAGNI（You Aren't Gonna Need It）
- 必要になる前に機能を作らない
- シンプルに始めて、必要に応じてリファクタ

## TypeScript規約

### 変数命名

```typescript
// ✅ 良い例: 説明的な名前
const activeMenuIndex = 0
const isSubMenuVisible = true

// ❌ 悪い例: 不明確な名前
const idx = 0
const flag = true
```

### 関数命名

```typescript
// ✅ 良い例: 動詞-名詞パターン
function handleDPadRight() { }
function calculateParticlePosition(index: number) { }
function isMenuActive(index: number): boolean { }
```

### イミュータビリティパターン（重要）

```typescript
// ✅ 常にスプレッド演算子を使用
const updatedState = { ...state, activeMenuIndex: 1 }
const updatedArray = [...items, newItem]

// ❌ 直接変更しない
state.activeMenuIndex = 1  // NG
items.push(newItem)        // NG
```

### 型安全性

```typescript
// ✅ 良い例: 適切な型
interface SkillItem {
  name: string
  icon: React.ReactNode
}

// ❌ 悪い例: 'any'の使用
function getSkill(id: any): any { }
```

## Reactベストプラクティス

### コンポーネント構造

```typescript
// ✅ 良い例: 型付き関数コンポーネント
interface DPadProps {
  onUp: () => void
  onDown: () => void
  onLeft: () => void
  onRight: () => void
  disableUp?: boolean
  disableDown?: boolean
}

export function DPad({ onUp, onDown, onLeft, onRight, disableUp, disableDown }: DPadProps) {
  return (/* ... */)
}
```

### 状態管理

```typescript
// ✅ 良い例: 前の状態に基づく場合は関数型更新
setActiveMenuIndex(prev => Math.min(prev + 1, 2))

// ❌ 悪い例: 直接状態参照
setActiveMenuIndex(activeMenuIndex + 1)
```

### 条件付きレンダリング

```typescript
// ✅ 良い例: 明確な条件付きレンダリング
{isLoading && <Spinner />}
{error && <ErrorMessage error={error} />}
{data && <DataDisplay data={data} />}
```

## ファイル構成

このプロジェクトの構造:
```
src/
├── main.tsx              # エントリポイント
├── App.tsx               # ルートコンポーネント（ナビゲーション状態）
├── ui/                   # UIコンポーネント
│   ├── Menus.tsx         # メインメニュー
│   ├── Buttons/          # D-padコントローラー
│   ├── Account/          # Accountサブメニュー
│   ├── Side/             # Sideプロジェクトサブメニュー
│   └── Content/          # コンテンツページ
└── assets/               # 画像・SVGアセット
```

### ファイル命名

```
components/DPad.tsx           # コンポーネントはPascalCase
types.ts                      # 型定義
constants.tsx                 # 定数
```

## パフォーマンスベストプラクティス

### メモ化

```typescript
import { useMemo, useCallback } from 'react'

// ✅ コストの高い計算にuseMemo
const sortedItems = useMemo(() => {
  return items.sort((a, b) => a.order - b.order)
}, [items])

// ✅ コールバックをメモ化
const handleNavigate = useCallback((direction: string) => {
  // ナビゲーション処理
}, [])
```

## テスト規約

### テスト構造（AAAパターン）

```typescript
test('D-pad right increases menu index', () => {
  // Arrange（準備）
  const { result } = renderHook(() => useNavigation())

  // Act（実行）
  act(() => result.current.handleDPadRight())

  // Assert（検証）
  expect(result.current.activeMenuIndex).toBe(1)
})
```

## コードスメル検出

以下のアンチパターンに注意:
- 50行を超える関数 → 小さな関数に分割
- 4階層以上のネスト → 早期リターンを使用
- 説明のないマジックナンバー → 名前付き定数を使用

**覚えておくこと**: コード品質は交渉の余地がない。明確で保守性の高いコードは、迅速な開発と自信を持ったリファクタリングを可能にする。
