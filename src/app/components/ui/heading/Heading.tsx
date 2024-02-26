import { FC } from 'react'
import styles from './Heading.module.scss'
import { IHeading } from './heading.interface'

const Heading: FC<IHeading> = ({ title }) => {
	return <h1 className={styles.text}>{title}</h1>
}

export default Heading
