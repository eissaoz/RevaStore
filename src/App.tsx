import { About } from './pages/About'
import { CreatorsPage } from './pages/CreatorsPage'
import { Explore } from './pages/Explore'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Orders } from './pages/Orders'
import { Shoppers } from './pages/Shoppers'
import { SignIn } from './pages/SignIn'
import { Start } from './pages/Start'
import { Store } from './pages/Store'
import { Footer } from './sections/Footer'
import { Nav } from './sections/Nav'
import { RouterProvider, useRouter } from './lib/router'

function Routes() {
  const { path } = useRouter()
  const route = path.replace(/\/+$/, '') || '/'

  switch (route) {
    case '/':
      return <Home />
    case '/explore':
      return <Explore />
    case '/creators':
      return <CreatorsPage />
    case '/shoppers':
      return <Shoppers />
    case '/store':
      return <Store />
    case '/orders':
      return <Orders />
    case '/about':
      return <About />
    case '/start':
      return <Start />
    case '/signin':
      return <SignIn />
    default:
      return <NotFound />
  }
}

// A small client-side router keeps every page in the same SPA while still
// giving each one a real URL. Nav and footer sit outside the route so they
// persist between pages.
export function App() {
  return (
    <RouterProvider>
      <Nav />
      <main>
        <Routes />
      </main>
      <Footer />
    </RouterProvider>
  )
}
