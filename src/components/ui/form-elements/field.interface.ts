import { InputHTMLAttributes } from 'react'

export interface IFieldProps {
	placeholder: string
	error: any
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> &
	IFieldProps

export interface IField extends TypeInputPropsField {}
