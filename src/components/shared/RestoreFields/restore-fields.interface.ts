import { FormState, UseFormGetValues, UseFormRegister } from 'react-hook-form'

export interface IRestoreFields {
	register: UseFormRegister<any>
	formState: FormState<any>
}
