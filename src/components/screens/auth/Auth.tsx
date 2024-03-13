import Button from '@/ui/form-elements/Button'
import Heading from '@/ui/heading/Heading'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { Metadata } from 'next'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './Auth.module.scss'
import AuthFields from './AuthFields'
import { IAuthInput } from './auth.interface'
import { useAuthRedirect } from './useAuthRedirect'


//FIXME: REMOVE METADATA FROM THIS COMPONENT
export const metadata: Metadata = {
	title: 'Auth'
}
//FIXME: REMOVE METADATA FROM THIS COMPONENT

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
		if (type === 'login') login(data)
		else if (type === 'register') register(data)

		reset()
	}

	return (
		<section className={styles.wrapper}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-6">
					<Heading title="Auth" />
					<AuthFields
						formState={formState}
						register={registerInput}
						isPasswordRequired
					/>
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
				</div>
			</form>
		</section>
	)
}

export default Auth
