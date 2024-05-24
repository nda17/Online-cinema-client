import styles from '@/components/shared/contentWrapper.module.scss'
import { FC } from 'react'
import CatalogGenres from '../templates/catalog-genres/CatalogGenres'
import { ICollectionPage } from './collection.interface'

const Collection: FC<ICollectionPage> = ({ collection }) => {
	const title = 'Genre catalog'
	const description =
		'In this section you will find all genres on our site'

	const data = collection.map((item) => ({
		_id: item._id,
		image: item.image,
		slug: item.slug,
		title: item.title
	}))

	return (
		<div className={styles.contentWrapper}>
			<CatalogGenres
				genres={data || []}
				title={title}
				description={description}
			/>
		</div>
	)
}

export default Collection
