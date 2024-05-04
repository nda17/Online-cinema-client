import { PUBLIC_URL } from '@/configs/url.config'
import Description from '@/ui/description/Description'
import GalleryItem from '@/ui/gallery/GalleryItem'
import Heading from '@/ui/heading/Heading'
import { FC } from 'react'
import styles from './Catalog.module.scss'
import { ICatalog } from './catalog.interface'

const Catalog: FC<ICatalog> = ({ title, description, movies }) => {
	return (
		<>
			<Heading title={title} />
			{description && (
				<Description text={description} className={styles.description} />
			)}
			<div className={styles.movies}>
				{movies.map((movie) => (
					<GalleryItem
						key={movie._id}
						variant="horizontal"
						item={{
							name: movie.title,
							posterPath: movie.bigPoster,
							url: PUBLIC_URL.moviesUrl(movie.slug),
							content: {
								title: movie.title
							}
						}}
					/>
				))}
			</div>
		</>
	)
}

export default Catalog
