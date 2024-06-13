import { validEmail, validPassword } from '@/shared/regex'
import Field from '@/ui/form-elements/Field'
import { FC } from 'react'
import { IEmailPasswordFields } from './email-password-fields.interface'

const EmailPasswordFields: FC<IEmailPasswordFields> = ({
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
					pattern: {
						value: validPassword,
						message:
							'Min length should more 6 symbols. Contains 1 number 0-9, 1 Latin letter a-z, 1 Latin letter A-Z'
					}
				})}
				placeholder="Password"
				type="password"
				error={errors.password}
			/>
		</>
	)
}

export default EmailPasswordFields
