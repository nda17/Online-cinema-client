import { EditorProps } from 'draft-js'
import {
	ButtonHTMLAttributes,
	CSSProperties,
	InputHTMLAttributes
} from 'react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

export interface IFieldProps {
	placeholder: string
	error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> &
	IFieldProps

export interface IField extends TypeInputPropsField {}

export interface IUploadField {
	folder?: string
	image?: string
	onChange: (...event: any[]) => void
	placeholder: string
	error?: FieldError
	style?: CSSProperties
	isNoImage?: boolean
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

type TypeEditorPropsField = EditorProps & IFieldProps

export interface ITextEditor
	extends Omit<TypeEditorPropsField, 'editorState'> {
	onChange: (...event: any[]) => void
	value: string
}
