'use client'
import { PUBLIC_URL } from '@/configs/url.config'
import Description from '@/ui/description/Description'
import GalleryItem from '@/ui/gallery/GalleryItem'
import Heading from '@/ui/heading/Heading'
import Pagination from '@/ui/pagination/Pagination'
import { FC, useState } from 'react'
import styles from './Catalog.module.scss'
import { ICatalog } from './catalog.interface'

const Catalog: FC<ICatalog> = ({ title, description, movies }) => {
	const [currentPage, setCurrentPage] = useState(1) //Текущая страница
	const itemQuantity = 8 //Количество элементов в одной группе

	const lastCardIndex = currentPage * itemQuantity //Индекс последнего элемента
	const firstCardIndex = lastCardIndex - itemQuantity //Индекс первого элемента
	const activePage = movies.slice(firstCardIndex, lastCardIndex)
	const listPage = [] //Количество отображаемых групп с элементами
	for (let i = 1; i <= Math.ceil(movies.length / itemQuantity); i++) {
		listPage.push(i)
	}

	const prevPage = () => {
		if (currentPage !== 1) {
			setCurrentPage((prev) => prev - 1)
		} else {
			return
		}
	}

	const changeActivePage = (activePage: number) =>
		setCurrentPage(activePage)

	const nextPage = () => {
		if (currentPage !== Math.ceil(movies.length / itemQuantity)) {
			setCurrentPage((prev) => prev + 1)
		} else {
			return
		}
	}

	return (
		<>
			<Heading title={title} />
			{description && (
				<Description text={description} className={styles.description} />
			)}
			<div className={styles.movies}>
				{activePage.map((movie) => (
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
			{movies.length > itemQuantity && (
				<Pagination
					listPage={listPage}
					currentPage={currentPage}
					prevPage={prevPage}
					nextPage={nextPage}
					changeActivePage={changeActivePage}
				/>
			)}
		</>
	)
}

export default Catalog
