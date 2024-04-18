import { EditorProps } from 'draft-js'
import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'

export interface IFieldProps {
	placeholder: string
	error: any
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> &
	IFieldProps

export interface IField extends TypeInputPropsField {}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

type TypeEditorPropsField = EditorProps & IField

export interface ITextEditor
	extends Omit<TypeEditorPropsField, 'editorState'> {
	onChange: (...event: any[]) => void
	value: string
}
