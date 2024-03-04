import Layout from '@/app/layout'
import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { IMainProvider } from './mainProvider.interface'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

const MainProvider: FC<IMainProvider> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>{children}</Layout>
		</QueryClientProvider>
	)
}

export default MainProvider
