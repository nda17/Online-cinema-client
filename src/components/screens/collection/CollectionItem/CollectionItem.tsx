import Link from 'next/link'
import { FC } from 'react'
import CollectionImage from '../CollectionImage'
import styles from './CollectionItem.module.scss'
import { ICollectionItem } from './collection-item.interface'

const CollectionItem: FC<ICollectionItem> = ({ item }) => {
	return (
		<Link href={item.url} className={styles.item}>
			<CollectionImage item={item} />
			<div className={styles.content}>
				<div className={styles.title}>{item.title}</div>
			</div>
			<div className={`${styles.behind} ${styles.second}`}>
				<CollectionImage item={item} />
			</div>
			<div className={`${styles.behind} ${styles.third}`}>
				<CollectionImage item={item} />
			</div>
		</Link>
	)
}

export default CollectionItem
