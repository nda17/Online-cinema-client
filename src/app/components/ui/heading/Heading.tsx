import { FC } from 'react'
import styles from './Heading.module.scss'

const Heading: FC<{title: string}> = ({ title }) => {
  return (
    <h1 className={styles.text}>
        {title}
    </h1>
  )
}

export default Heading