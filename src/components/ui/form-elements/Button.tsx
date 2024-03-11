import { FC } from 'react'
import styles from './Button.module.scss'
import { IButton } from './button.interface'

const Button: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button className={styles.button} {...rest}>
			{children}
		</button>
	)
}

export default Button
