import Image from 'next/image'
import { FC } from 'react'
import { IGalleryGenresItemProps } from './GalleryGenresItem/gallery-genres-item.interface'

const GalleryGenresImage: FC<IGalleryGenresItemProps> = ({ item }) => {
	return (
		<Image
			alt={item.title}
			src={item.image}
			sizes="auto"
			fill
			draggable={false}
		/>
	)
}

export default GalleryGenresImage
