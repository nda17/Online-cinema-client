import { FC, useState } from 'react'
import MaterialIcon from '../icons/MaterialIcon'
import styles from './SearchField.module.scss'
import { ISearchField } from './searchField.interface'

export const SearchField: FC<ISearchField> = ({
	searchValue,
	handleSearch,
	handleClear
}) => {
	const [valueInput, setValueInput] = useState('')
	return (
		<div className={styles.searchFieldWrapper}>
			<MaterialIcon name="MdSearch" />
			<input
				placeholder="Search"
				value={searchValue}
				onChange={handleSearch}
			/>
			{!searchValue ? null : (
				<span onClick={handleClear}>
					<MaterialIcon name="MdClose" />
				</span>
			)}
		</div>
	)
}
