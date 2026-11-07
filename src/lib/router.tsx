import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
  type MouseEvent,
  type ReactNode,
} from 'react'

type Location = { path: string; search: string; hash: string }
type RouterValue = Location & { navigate: (to: string, options?: { replace?: boolean }) => void }

const RouterContext = createContext<RouterValue | null>(null)

function read(): Location {
  return { path: window.location.pathname, search: window.location.search, hash: window.location.hash }
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState<Location>(read)

  useEffect(() => {
    const onChange = () => setLocation(read())
    window.addEventListener('popstate', onChange)
    return () => window.removeEventListener('popstate', onChange)
  }, [])

  const navigate = useCallback((to: string, options?: { replace?: boolean }) => {
    const url = new URL(to, window.location.origin)
    if (url.origin !== window.location.origin) {
      window.location.href = url.href
      return
    }
    const target = `${url.pathname}${url.search}${url.hash}`
    const current = `${window.location.pathname}${window.location.search}${window.location.hash}`
    if (target === current) {
      setLocation(read())
      return
    }
    window.history[options?.replace ? 'replaceState' : 'pushState']({}, '', target)
    setLocation(read())
  }, [])

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1))
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 60)
      return () => window.clearTimeout(timer)
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.path, location.search, location.hash])

  const value = useMemo<RouterValue>(() => ({ ...location, navigate }), [location, navigate])

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export function useRouter(): RouterValue {
  const context = useContext(RouterContext)
  if (!context) throw new Error('useRouter must be used inside RouterProvider')
  return context
}

export function useQuery(): URLSearchParams {
  const { search } = useRouter()
  return useMemo(() => new URLSearchParams(search), [search])
}

export function Link({ href, onClick, ...rest }: { href: string } & ComponentPropsWithoutRef<'a'>) {
  const { navigate } = useRouter()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (event.defaultPrevented) return
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    if (!href.startsWith('/') || href.startsWith('//')) return
    event.preventDefault()
    navigate(href)
  }

  return <a href={href} onClick={handleClick} {...rest} />
}
