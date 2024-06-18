'use client'
import { EnumTokens } from '@/configs/enum.tokens'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import Cookies from 'js-cookie'
import { usePathname } from 'next/navigation'
import { FC, useEffect } from 'react'
import { IAuthProvider } from './authProvider.interface'

const AuthProvider: FC<IAuthProvider> = ({ children }) => {
	const { user } = useAuth()
	const { logout, checkAuth } = useActions()
	const pathname = usePathname()

	useEffect(() => {
		const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)

		if (accessToken) {
			checkAuth()
		}
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		const refreshToken = Cookies.get(EnumTokens.REFRESH_TOKEN)
		if (!refreshToken && user) {
			logout()
		}
	}, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

	return <>{children}</>
}

export default AuthProvider
