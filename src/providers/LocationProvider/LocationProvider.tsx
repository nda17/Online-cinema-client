'use client'
import { usePathname } from 'next/navigation'
import { FC, useEffect } from 'react'
import { savePathToStorage } from './location.helper'
import { ILocationProvider } from './locationProvider.interface'

const LocationProvider: FC<ILocationProvider> = ({ children }) => {
	const pathname = usePathname()

	useEffect(() => {
		if (pathname !== '/auth') {
			savePathToStorage(pathname)
		} else if (
			pathname === '/auth' &&
			sessionStorage.getItem('pathname') === '/'
		) {
			savePathToStorage('/')
		}
	}, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

	return <>{children}</>
}

export default LocationProvider
