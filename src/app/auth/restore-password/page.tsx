import RestorePassword from '@/screens/auth/restore-password/RestorePassword'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Restore password | Online-Cinema'
}

const RestorePasswordPage = () => {
	return <RestorePassword />
}

export default RestorePasswordPage
