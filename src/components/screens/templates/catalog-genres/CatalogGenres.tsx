'use client'
import { PUBLIC_URL } from '@/configs/url.config'
import Description from '@/ui/description/Description'
import Heading from '@/ui/heading/Heading'
import Pagination from '@/ui/pagination/Pagination'
import { FC, useState } from 'react'
import CollectionItem from '../../collection/CollectionItem/CollectionItem'
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
			<div className={styles.genres}>
				{activePage.map((genre) => (
					<CollectionItem
						key={genre._id}
						item={{
							_id: genre._id,
							name: genre.title,
							posterPath: genre.image,
							url: PUBLIC_URL.genresUrl(genre.slug),
							title: genre.title
						}}
					/>
				))}
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
