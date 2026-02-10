# 検証ループスキル

React 19 + TypeScript + Vite SPA用の包括的な検証システム。

## 使用タイミング

以下の場合にこのスキルを呼び出す:
- 機能または重要なコード変更を完了した後
- PRを作成する前
- 品質ゲートが通ることを確認したい時
- リファクタリング後

## 検証フェーズ

### フェーズ1: 型チェック
```bash
pnpm compile
```

### フェーズ2: ビルド検証
```bash
pnpm build
```

ビルドが失敗したら、続行する前に停止して修正。

### フェーズ3: Lintチェック
```bash
pnpm lint
```

### フェーズ4: セキュリティスキャン
```bash
# シークレットをチェック
grep -rn "sk-" --include="*.ts" --include="*.tsx" src/ 2>/dev/null | head -10

# console.logをチェック
grep -rn "console.log" --include="*.ts" --include="*.tsx" src/ 2>/dev/null | head -10
```

### フェーズ5: 差分レビュー
```bash
git diff --stat
git diff HEAD~1 --name-only
```

各変更ファイルを以下の観点でレビュー:
- 意図しない変更
- 欠落したエラーハンドリング
- 潜在的なエッジケース

## 出力フォーマット

```
検証レポート
==================

型:        [PASS/FAIL] (Xエラー)
ビルド:    [PASS/FAIL]
Lint:      [PASS/FAIL] (X警告)
セキュリティ: [PASS/FAIL] (X問題)
差分:      [Xファイル変更]

総合:      PR [準備完了/未完了]
```
