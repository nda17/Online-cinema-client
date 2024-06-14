import EmailPasswordFields from '@/components/shared/AuthFields/EmailPasswordFields/EmailPasswordFields'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import Button from '@/ui/form-elements/Button'
import Heading from '@/ui/heading/Heading'
import Link from 'next/link'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './Auth.module.scss'
import { IAuthInput } from './auth.interface'
import { useAuthRedirect } from './useAuthRedirect'

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset
	} = useForm<IAuthInput>({
		mode: 'onChange'
	})

	const { login, register } = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') {
			login(data)
		} else if (type === 'register') {
			register(data)
		}

		reset()
	}

	return (
		<div className={styles.auth}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.formAuth}>
				<Heading title="Auth" />
				<EmailPasswordFields
					formState={formState}
					register={registerInput}
				/>
				<div className={styles.forgotPasswordLink}>
					<Link href={'/auth/restore-password'}>
						Forgot your password ?
					</Link>
				</div>
				<div className={styles.buttons}>
					<Button
						type="submit"
						onClick={() => setType('login')}
						disabled={isLoading}
					>
						Login
					</Button>
					<Button
						type="submit"
						onClick={() => setType('register')}
						disabled={isLoading}
					>
						Register
					</Button>
				</div>
			</form>
		</div>
	)
}

export default Auth
