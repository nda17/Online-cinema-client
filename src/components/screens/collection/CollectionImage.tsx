import Image from 'next/image'
import { FC } from 'react'
import { ICollectionItem } from './CollectionItem/collection-item.interface'

const CollectionImage: FC<ICollectionItem> = ({ item }) => {
	return (
		<Image
			alt={item.title}
			src={item.posterPath}
			sizes="auto"
			fill
			draggable={false}
		/>
	)
}

export default CollectionImage
