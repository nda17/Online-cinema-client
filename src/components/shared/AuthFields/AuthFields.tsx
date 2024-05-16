import { validEmail } from '@/shared/regex'
import Field from '@/ui/form-elements/Field'
import { FC } from 'react'
import { IAuthFields } from './auth-fields.interface'

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors }
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required!',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email'
					}
				})}
				placeholder="E-mail"
				type="email"
				error={errors.email}
			/>
			<Field
				{...register('password', {
					minLength: {
						value: 6,
						message: 'Min length should more 6 symbols!'
					}
				})}
				placeholder="Password"
				type="password"
				error={errors.password}
			/>
		</>
	)
}

export default AuthFields
