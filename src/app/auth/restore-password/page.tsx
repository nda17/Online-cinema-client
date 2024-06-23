import SpinnerLoader from '@/ui/spinner-loader/SpinnerLoader'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
const DynamicRestorePassword = dynamic(
	() => import('@/screens/auth/restore-password/RestorePassword'),
	{
		loading: () => <SpinnerLoader />,
		ssr: false
	}
)

export const metadata: Metadata = {
	title: 'Restore password | Online-Cinema'
}

const RestorePasswordPage = () => {
	return <DynamicRestorePassword />
}

export default RestorePasswordPage
