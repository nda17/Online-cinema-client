import Link from 'next/link'
import { FC } from 'react'
import GalleryGenresImage from '../GalleryGenresImage'
import styles from './GalleryGenresItem.module.scss'
import { IGalleryGenresItemProps } from './gallery-genres-item.interface'

const GalleryGenresItem: FC<IGalleryGenresItemProps> = ({ item }) => {
	return (
		<Link href={item.url} className={styles.item}>
			<GalleryGenresImage item={item} />
			<div className={styles.content}>
				<div className={styles.title}>{item.title}</div>
			</div>
			<div className={`${styles.behind} ${styles.second}`}>
				<GalleryGenresImage item={item} />
			</div>
			<div className={`${styles.behind} ${styles.third}`}>
				<GalleryGenresImage item={item} />
			</div>
		</Link>
	)
}

export default GalleryGenresItem
