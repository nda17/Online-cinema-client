import Error404 from '@/app/not-found'
import { AuthService } from '@/services/auth/auth.service'
import SpinnerLoader from '@/ui/spinner-loader/SpinnerLoader'
import { errorCatch } from 'api/api.helpers'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
const DynamicEmailСonfirmationPage = dynamic(
	() => import('@/screens/auth/email-confirmation/EmailСonfirmation'),
	{
		loading: () => <SpinnerLoader />,
		ssr: false
	}
)

export const metadata: Metadata = {
	title: 'Confirmation Email | Online-Cinema'
}

const EmailConfirmationPage = async ({
	params
}: {
	params: { user_id: string }
}) => {
	const { data: user } = await AuthService.getById(params.user_id)

	if (user.isActivated) {
		return <Error404 />
	}

	try {
		await AuthService.confirmationEmail(params.user_id)
		return <DynamicEmailСonfirmationPage status={'Email confirmed.'} />
	} catch (error) {
		console.log(errorCatch(error))
		return (
			<DynamicEmailСonfirmationPage
				status={
					'An error occurred while confirming your email, please try again later.'
				}
			/>
		)
	}
}

export default EmailConfirmationPage
