'use client'
import AuthProvider from '@/providers/AuthProvider/AuthProvider'
import { store } from '@/store/store'
import ReduxToastr from '@/ui/redux-toastr/ReduxToastr'
import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import CookieConsentProvider from '../CookieConsentProvider/CookieConsentProvider'
import LocationProvider from '../LocationProvider/LocationProvider'
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
			<CookieConsentProvider />
			<QueryClientProvider client={queryClient}>
				<ReduxToastr />
				<LocationProvider>
					<AuthProvider>{children}</AuthProvider>
				</LocationProvider>
			</QueryClientProvider>
		</Provider>
	)
}

export default MainProvider
