import DynamicAuth from '@/components/screens/auth/DynamicAuth'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
	title: 'Auth | Online-Cinema'
}

const AuthPage: NextPage = () => {
	return <DynamicAuth />
}

export default AuthPage
