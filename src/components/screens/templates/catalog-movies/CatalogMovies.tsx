'use client'
import Pagination from '@/components/ui/pagination/Pagination'
import Description from '@/ui/description/Description'
import GalleryItem from '@/ui/gallery/GalleryItem'
import Heading from '@/ui/heading/Heading'
import SubHeading from '@/ui/subheading/SubHeading'
import { FC, useState } from 'react'
import styles from './CatalogMovies.module.scss'
import { ICatalogMovies } from './catalog-movies.interface'
import { getMoviesUrl } from '@/configs/api.config'

const CatalogMovies: FC<ICatalogMovies> = ({
	title,
	description,
	movies,
	favorite,
	device
}) => {
	const [currentPage, setCurrentPage] = useState(1) //Текущая страница
	const itemQuantity = 9 //Количество элементов в одной группе

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
			{description && <Description text={description} />}
			{!movies.length && (
				<SubHeading title="Sorry, there is no content available at this time. Try again later." />
			)}
			<div className={styles.movies}>
				{movies.length
					? activePage.map((movie) => (
							<GalleryItem
								key={movie._id}
								variant="horizontal"
								item={{
									_id: movie._id,
									name: movie.title,
									posterPath: movie.bigPoster,
									url: getMoviesUrl(`/${movie.slug}`),
									content: {
										title: movie.title
									}
								}}
								favorite={favorite}
								device={device}
							/>
					  ))
					: null}
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

export default CatalogMovies
