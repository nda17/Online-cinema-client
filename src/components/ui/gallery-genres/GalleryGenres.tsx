import styles from '@/components/shared/contentWrapper.module.scss'
import { FC } from 'react'
import GalleryGenresItem from './GalleryGenresItem/GalleryGenresItem'
import { IGalleryGenresItem } from './gallery-genres.interface'

const GalleryGenres: FC<{ items: IGalleryGenresItem[] }> = ({ items }) => {
	return (
		<div className={styles.gallery}>
			{items.map((item) => (
				<GalleryGenresItem key={item._id} item={item} />
			))}
		</div>
	)
}

export default GalleryGenres
