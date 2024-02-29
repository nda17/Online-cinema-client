import Layout from '@/components/layout/Layout'
import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

export interface IMainProvider {
	children: React.ReactNode
}

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
