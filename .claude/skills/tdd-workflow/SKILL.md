---
name: tdd-workflow
description: React 19 + TypeScript + Vite SPA向けTDDワークフロー。Vitestによるユニット/コンポーネントテスト、PlaywrightによるE2Eテスト。
---

# テスト駆動開発ワークフロー

**注意**: 現在テストフレームワーク未導入。初回使用時はセットアップから開始。

## セットアップ

```bash
# Vitest + React Testing Library
pnpm add -D vitest @testing-library/react @testing-library/jest-dom jsdom

# Playwright（E2E）
pnpm add -D @playwright/test
npx playwright install
```

## コア原則

### 1. コードの前にテスト
常にテストを最初に書き、次にテストを通すコードを実装する。

### 2. テストタイプ

#### ユニットテスト（Vitest）
- 個々の関数とユーティリティ
- 純粋関数、ヘルパー

#### コンポーネントテスト（Vitest + React Testing Library）
- Reactコンポーネントのレンダリング
- ユーザーインタラクション

#### E2Eテスト（Playwright）
- D-padナビゲーションフロー
- メニュー切り替え
- レスポンシブ表示

## TDDワークフローステップ

### ステップ1: テストケースを生成
```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('Content', () => {
  it('Account選択時にProfile表示', () => {
    render(<Content activeMenuIndex={0} activeSubMenuIndex={0} />)
    expect(screen.getByText('linnefromice')).toBeInTheDocument()
  })

  it('Work選択時にWork画像ギャラリー表示', () => {
    render(<Content activeMenuIndex={1} activeSubMenuIndex={0} />)
    // ギャラリーが表示されることを確認
  })
})
```

### ステップ2: テスト実行（失敗すべき）
```bash
pnpm test
```

### ステップ3: コードを実装

### ステップ4: テスト再実行
```bash
pnpm test
```

### ステップ5: リファクタ

## E2Eテストパターン（Playwright）
```typescript
import { test, expect } from '@playwright/test'

test('D-padでメニューナビゲーションできる', async ({ page }) => {
  await page.goto('/')

  // 初期状態はAccount
  await expect(page.locator('.menu-active')).toContainText('Account')

  // 右ボタンでWork
  await page.click('[data-testid="dpad-right"]')
  await expect(page.locator('.menu-active')).toContainText('Work')

  // さらに右ボタンでSide
  await page.click('[data-testid="dpad-right"]')
  await expect(page.locator('.menu-active')).toContainText('Side')
})
```

## テストファイル構成

```
src/
├── ui/
│   ├── Content/
│   │   ├── Content.tsx
│   │   └── Content.test.tsx
│   ├── Buttons/
│   │   ├── DPad.tsx
│   │   └── DPad.test.tsx
│   └── Menus.tsx
│       └── Menus.test.tsx
└── e2e/
    └── navigation.spec.ts
```

## ベストプラクティス

1. **テストを最初に書く** - 常にTDD
2. **テストごとに1つのアサート** - 単一の動作に焦点
3. **説明的なテスト名** - 何がテストされるか説明
4. **Arrange-Act-Assert** - 明確なテスト構造
5. **実装詳細ではなく動作をテスト**
6. **エッジケースをテスト** - D-padの境界値、空状態

**覚えておくこと**: テストはオプションではない。自信を持ったリファクタリングと迅速な開発を可能にするセーフティネット。
