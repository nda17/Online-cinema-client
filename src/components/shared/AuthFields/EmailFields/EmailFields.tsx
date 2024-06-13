import { validEmail } from '@/shared/regex'
import Field from '@/ui/form-elements/Field'
import { FC } from 'react'
import { IEmailFields } from './email-fields.interface'

const EmailFields: FC<IEmailFields> = ({
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
		</>
	)
}

export default EmailFields
