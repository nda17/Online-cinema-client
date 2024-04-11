import { FC } from 'react'
import MaterialIcon from '../icons/MaterialIcon'
import styles from './SearchField.module.scss'
import { ISearchField } from './search-field.interface'

export const SearchField: FC<ISearchField> = ({
	searchTerm,
	handleSearch,
	handleClear
}) => {
	return (
		<div className={styles.searchField}>
			<MaterialIcon name="MdSearch" />
			<input
				placeholder="Search"
				value={searchTerm}
				onChange={handleSearch}
			/>
			{!searchTerm ? null : (
				<span onClick={handleClear}>
					<MaterialIcon name="MdClose" />
				</span>
			)}
		</div>
	)
}
