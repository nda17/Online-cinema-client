'use client'
import MainProvider from '@/providers/MainProvider'
import dynamic from 'next/dynamic'
const DynamicAuth = dynamic(() => import('@/screens/auth/Auth'), {
	ssr: false
})

const AuthPage = () => {
	return (
		<MainProvider>
			<DynamicAuth />
		</MainProvider>
	)
}

export default AuthPage
