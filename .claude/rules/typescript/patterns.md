# TypeScript/JavaScript パターン

> このファイルは [common/patterns.md](../common/patterns.md) をTypeScript/JavaScript固有の内容で拡張しています。

## カスタムフックパターン

```typescript
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}
```

## コンポーネントプロップスパターン

```typescript
interface Props {
  activeMenuIndex: number
  activeSubMenuIndex: number
  onNavigate: (direction: 'up' | 'down' | 'left' | 'right') => void
}
```
