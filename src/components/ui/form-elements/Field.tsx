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
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

export default Field
