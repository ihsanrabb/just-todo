import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import FallbackPage from './pages/FallbackPage.jsx'
import HomePage from './pages/HomePage.jsx'

const router = createBrowserRouter([
  { index: true, Component: HomePage, ErrorBoundary: FallbackPage },
  {
    path: 'ui',
    lazy: async () => ({
      Component: (await import('./pages/UiGalleryPage.jsx')).default,
    }),
  },
  { path: '*', Component: FallbackPage },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
