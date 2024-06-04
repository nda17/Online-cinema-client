import Link from 'next/link'
import { FC } from 'react'
import styles from './SubHeadingLink.module.scss'

const SubHeadingLink: FC<{ title: string; url: string }> = ({
	title,
	url
}) => {
	return (
		<Link href={url} className={styles.subHeadingLink}>
			{title}
		</Link>
	)
}

export default SubHeadingLink
