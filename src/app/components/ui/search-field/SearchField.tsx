import { FC } from 'react'
import MaterialIcon from '../MaterialIcon'
import styles from './SearchField.module.scss'
import { ISearchField } from './searchField.interface'

export const SearchField: FC<ISearchField> = ({ searchTerm, handleSearch }) => {
	return (
		<div className={styles.searchField}>
			<MaterialIcon name="MdSearch" />
			<input placeholder="Search" value={searchTerm} onChange={handleSearch} />
		</div>
	)
}
