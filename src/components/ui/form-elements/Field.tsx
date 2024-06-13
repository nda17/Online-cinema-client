import { forwardRef } from 'react'
import { IField } from './form.interface'
import styles from './form.module.scss'

/* eslint-disable react/display-name */
const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={styles.formString} style={style}>
				<label>
					<span>{placeholder}</span>
					<input ref={ref} type={type} {...rest} autoComplete="on" />
				</label>
				{error?.message === 'Please enter a valid email' && (
					<p className={styles.errorEmail}>{error.message}</p>
				)}
				{error?.message ===
					'Min length should more 6 symbols. Contains 1 number 0-9, 1 Latin letter a-z, 1 Latin letter A-Z' && (
					<p className={styles.errorPassword}>{error.message}</p>
				)}
			</div>
		)
	}
)

export default Field
