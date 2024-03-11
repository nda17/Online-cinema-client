import { useAuth } from '@/hooks/useAuth'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

	//FIXME: сделать редирект
	//FIXME: сделать редирект
	//FIXME: сделать редирект
	
export const useAuthRedirect = () => {
	const { user } = useAuth()

	const { push } = useRouter()

	const searchParams = useSearchParams()
	
	const redirect = searchParams ? String(useSearchParams()) : '/'

	useEffect(() => {
		if (user) {
			push(redirect)
		}
	}, [user, redirect, push])
}

	//FIXME: сделать редирект
	//FIXME: сделать редирект
	//FIXME: сделать редирект