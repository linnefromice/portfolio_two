# TypeScript/JavaScript セキュリティ

> このファイルは [common/security.md](../common/security.md) を TypeScript/JavaScript 固有の内容で拡張します。

## シークレット管理

```typescript
// 絶対にダメ: ハードコードされたシークレット
const apiKey = "sk-proj-xxxxx"

// 正解: Vite環境変数を使用
const apiKey = import.meta.env.VITE_API_KEY

if (!apiKey) {
  throw new Error('VITE_API_KEY not configured')
}
```

**注意**: Viteではクライアントに公開される環境変数は `VITE_` プレフィックスが必須。
