'use client'
import AuthProvider from '@/providers/AuthProvider/AuthProvider'
import { store } from '@/store/store'
import ReduxToastr from '@/ui/redux-toastr/ReduxToastr'
import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
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
				<AuthProvider>{children}</AuthProvider>
			</QueryClientProvider>
		</Provider>
	)
}

export default MainProvider
