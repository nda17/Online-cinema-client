'use client'
import { PUBLIC_URL } from '@/configs/url.config'
import Description from '@/ui/description/Description'
import GalleryGenresItem from '@/ui/gallery-genres/GalleryGenresItem/GalleryGenresItem'
import Heading from '@/ui/heading/Heading'
import Pagination from '@/ui/pagination/Pagination'
import SubHeading from '@/ui/subheading/SubHeading'
import { FC, useState } from 'react'
import styles from './CatalogGenres.module.scss'
import { ICatalogGenres } from './catalog-genres.interface'

const CatalogGenres: FC<ICatalogGenres> = ({
	title,
	description,
	genres
}) => {
	const [currentPage, setCurrentPage] = useState(1) //Текущая страница
	const itemQuantity = 9 //Количество элементов в одной группе

	const lastCardIndex = currentPage * itemQuantity //Индекс последнего элемента
	const firstCardIndex = lastCardIndex - itemQuantity //Индекс первого элемента
	const activePage = genres.slice(firstCardIndex, lastCardIndex)
	const listPage = [] //Количество отображаемых групп с элементами
	for (let i = 1; i <= Math.ceil(genres.length / itemQuantity); i++) {
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
		if (currentPage !== Math.ceil(genres.length / itemQuantity)) {
			setCurrentPage((prev) => prev + 1)
		} else {
			return
		}
	}

	return (
		<>
			<Heading title={title} />
			{description && <Description text={description} />}
			{!genres.length && (
				<SubHeading title="Sorry, there is no content available at this time. Try again later." />
			)}
			<div className={styles.genres}>
				{genres.length
					? activePage.map((genre) => (
							<GalleryGenresItem
								key={genre._id}
								item={{
									_id: genre._id,
									url: PUBLIC_URL.genresUrl(genre.slug),
									image: genre.image,
									title: genre.title
								}}
							/>
					  ))
					: null}
			</div>
			{genres.length > itemQuantity && (
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

export default CatalogGenres
