import Link from 'next/link'
import { FC, Fragment } from 'react'
import styles from './ContentList.module.scss'
import { IContentList } from './content-list.interface'

const ContentList: FC<IContentList> = ({ name, links }) => {
	return (
		<div className={styles.list}>
			<div className={styles.name}>{name}:</div>
			<div className={styles.links}>
				{links.slice(0, 3).map(({ link, title, _id }, index) => (
					<Fragment key={_id}>
						<Link href={link}>{title}</Link>
						{index + 1 !== links.length ? ', ' : ''}
					</Fragment>
				))}
			</div>
		</div>
	)
}

export default ContentList
