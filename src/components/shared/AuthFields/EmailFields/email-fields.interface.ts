import { FormState, UseFormRegister } from 'react-hook-form'

export interface IEmailFields {
	register: UseFormRegister<any>
	formState: FormState<any>
}
