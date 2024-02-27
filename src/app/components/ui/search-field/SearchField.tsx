import { FC } from 'react'
import MaterialIcon from '../icons/MaterialIcon'
import styles from './SearchField.module.scss'
import { ISearchField } from './searchField.interface'

export const SearchField: FC<ISearchField> = ({
	handleSearch,
	searchTerm
}) => {
	return (
		<div className={styles.searchFieldWrapper}>
			<MaterialIcon name="MdSearch" />
			<input
				placeholder="Search"
				value={searchTerm}
				onChange={handleSearch}
			/>
		</div>
	)
}
