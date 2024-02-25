import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const MainProvider = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}

export default MainProvider