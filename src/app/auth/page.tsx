import DynamicAuth from '@/components/screens/auth/DynamicAuth'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Auth | Online-Cinema'
}

const AuthPage = () => {
	return <DynamicAuth />
}

export default AuthPage
