import classNames from 'classnames'
import parse from 'html-react-parser'
import { FC } from 'react'
import styles from './Description.module.scss'
import { IDescription } from './description.interface'

const Description: FC<IDescription> = ({ text, className = '' }) => {
	return (
		<div className={classNames(styles.description, className)}>
			{parse(text)}
		</div>
	)
}

export default Description
