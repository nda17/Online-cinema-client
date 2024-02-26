import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { IMainProvider } from './MainProvider.interface'

const queryClient = new QueryClient()

const MainProvider: FC <IMainProvider> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}

export default MainProvider