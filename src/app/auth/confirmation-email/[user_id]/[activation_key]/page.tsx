import Error404 from '@/app/not-found'
import { UserService } from '@/services/user/user.service'
import { errorCatch } from 'api/api.helpers'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
const DynamicEmailСonfirmationPage = dynamic(
	() => import('@/screens/email-confirmation/EmailСonfirmationPage'),
	{ ssr: false }
)

export const metadata: Metadata = {
	title: 'Confirmation Email | Online-Cinema'
}

const EmailConfirmationPage = async ({
	params
}: {
	params: { user_id: string; activation_key: string }
}) => {
	const { data: user } = await UserService.getStatusConfirmationEmail(
		params.user_id
	)

	if (user.isActivated) {
		return <Error404 />
	} else {
		try {
			await confirmationEmail(params)
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
}

const confirmationEmail = async (params: {
	user_id: string
	activation_key: string
}) => {
	try {
		const { data: user } = await UserService.getStatusConfirmationEmail(
			params.user_id
		)
		if (user.isActivated === false) {
			await UserService.updateStatusConfirmationEmail(params.user_id)
		}

		return {
			user
		}
	} catch (error) {
		console.log(errorCatch(error))
	}
}

export default EmailConfirmationPage
