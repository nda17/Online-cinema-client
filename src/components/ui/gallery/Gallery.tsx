import { FC } from 'react'
import styles from './Gallery.module.scss'
import GalleryItem from './GalleryItem'
import { IGalleryItem } from './gallery.interface'

const Gallery: FC<{ items: IGalleryItem[]; device?: string }> = ({
	items,
	device
}) => {
	return (
		<div className={styles.gallery}>
			{items.map((item) => (
				<GalleryItem
					key={item.url}
					item={item}
					variant="vertical"
					device={device}
				/>
			))}
		</div>
	)
}

export default Gallery
