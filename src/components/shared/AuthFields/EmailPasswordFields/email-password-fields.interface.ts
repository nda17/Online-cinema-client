import { FormState, UseFormRegister } from 'react-hook-form'

export interface IEmailPasswordFields {
	register: UseFormRegister<any>
	formState: FormState<any>
}
