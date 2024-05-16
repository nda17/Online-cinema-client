import { FormState, UseFormRegister } from 'react-hook-form'

export interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
}
