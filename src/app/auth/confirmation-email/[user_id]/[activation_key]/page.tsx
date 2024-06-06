import Error404 from '@/app/not-found'
import EmailСonfirmationPage from '@/screens/email-confirmation/EmailСonfirmationPage'
import { UserService } from '@/services/user/user.service'
import { errorCatch } from 'api/api.helpers'
import { Metadata } from 'next'

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
			return <EmailСonfirmationPage status={'Email confirmed.'} />
		} catch (error) {
			console.log(errorCatch(error))
			return (
				<EmailСonfirmationPage
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
