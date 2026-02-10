# パフォーマンス最適化

## ビルドトラブルシューティング

ビルドが失敗した場合:
1. **build-error-resolver** エージェントを使用する
2. エラーメッセージを分析する
3. 段階的に修正する
4. 各修正後に検証する

## フロントエンドパフォーマンス

- 不要な再レンダリングを避ける（React.memo、useMemo、useCallback）
- 画像アセットを最適化する
- import.meta.glob()での動的インポートを活用する
- CSSアニメーションはtransformとopacityを優先する
