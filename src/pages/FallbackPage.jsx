import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router'
import { EmptyState } from '../components/ui/EmptyState.jsx'

// Doubles as the router's ErrorBoundary and its catch-all route. Rendered as a
// plain route there is no error, which is exactly the not-found case.
function FallbackPage() {
  const error = useRouteError()
  const navigate = useNavigate()

  let title = 'Page not found'
  let body = "That page doesn't exist. Check the address and try again."

  if (error) {
    title = isRouteErrorResponse(error)
      ? `${error.status} ${error.statusText}`
      : 'Something went wrong'
    body = 'This page failed to load. Head back and give it another go.'
  }

  return (
    <EmptyState
      title={title}
      body={body}
      actionLabel="Back to your todos"
      onAction={() => navigate('/')}
    />
  )
}

export default FallbackPage
