'use client'
import RestoreFields from '@/components/shared/RestoreFields/RestoreFields'
import { useAuth } from '@/hooks/useAuth'
import { AuthService } from '@/services/auth/auth.service'
import Button from '@/ui/form-elements/Button'
import Heading from '@/ui/heading/Heading'
import { toastrError } from '@/utils/api/toastr-error-redux'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { toastr } from 'react-redux-toastr'
import styles from './RestorePassword.module.scss'
import { IEmail } from './restore-password.interface'

const RestorePassword: FC = () => {
	const { isLoading } = useAuth()

	const { replace } = useRouter()

	const redirect = () => {
		setTimeout(() => {
			replace('/auth')
		}, 5000)
	}

	const {
		register: restoreInput,
		handleSubmit,
		formState,
		reset
	} = useForm<IEmail>({
		mode: 'onChange'
	})

	const { mutateAsync, status } = useMutation(
		'Restore user password',
		(data: IEmail) => AuthService.restore(data.email),

		{
			onSuccess() {
				toastr.success(
					'Restore password',
					'A new password has been sent to your email'
				)
			},

			onError(error) {
				toastrError(error, 'Restore password')
			}
		}
	)

	const onSubmit: SubmitHandler<IEmail> = async (data) => {
		await mutateAsync(data)
		reset()
		redirect()
	}

	return (
		<div className={styles.auth}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.formAuth}>
				<Heading title="Auth | Restore password" />
				<div className={styles.wrapper}>
					{status !== 'success' ? (
						<>
							<RestoreFields
								formState={formState}
								register={restoreInput}
							/>
							<div className={styles.buttons}>
								<Button type="submit" disabled={isLoading}>
									Restore
								</Button>
							</div>
						</>
					) : (
						<>
							<p className="text-[#28b54d] italic">
								Redirect to Auth page after 5 seconds...
							</p>
						</>
					)}
				</div>
			</form>
		</div>
	)
}

export default RestorePassword
