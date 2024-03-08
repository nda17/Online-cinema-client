import { store } from '@/store/store'
import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import ReduxToastr from './ReduxToastr'
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
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ReduxToastr />
				{children}
			</QueryClientProvider>
		</Provider>
	)
}

export default MainProvider
