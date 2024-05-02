import classNames from 'classnames'
import parse from 'html-react-parser'
import { FC } from 'react'
import styles from './Description.module.scss'
import { IDescription } from './description.interface'

const Description: FC<IDescription> = ({ text, className = '' }) => {
	return (
		<div className={classNames(styles.desription, className)}>
			<p>{parse(text)}</p>
		</div>
	)
}

export default Description
