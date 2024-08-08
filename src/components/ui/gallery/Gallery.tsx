import dynamic from 'next/dynamic'
import { FC } from 'react'
import styles from './Gallery.module.scss'
import { IGalleryItem } from './gallery.interface'

const DynamicGalleryItem = dynamic(() => import('./GalleryItem'), {
	ssr: false
})

const Gallery: FC<{ items: IGalleryItem[]; device?: string }> = ({
	items,
	device
}) => {
	return (
		<div className={styles.gallery}>
			{items.map((item) => (
				<DynamicGalleryItem
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
