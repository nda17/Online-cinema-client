import { EnumTokens } from '@/configs/enum.tokens'
import { useAuth } from '@/hooks/useAuth'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useAuthRedirect = () => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
	const refreshToken = Cookies.get(EnumTokens.REFRESH_TOKEN)

	const { user } = useAuth()
	const { replace } = useRouter()

	const redirect = sessionStorage.getItem('pathname')
		? String(sessionStorage.getItem('pathname'))
		: '/'

	useEffect(() => {
		if (user && accessToken && refreshToken) {
			replace(redirect)
		}
	}, [user, accessToken, refreshToken, redirect, replace])
}
