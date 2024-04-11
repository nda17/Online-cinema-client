import { SearchField } from '@/ui/search-field/SearchField'
import { FC } from 'react'
import styles from './SearchContainer.module.scss'
import SearchList from './SearchList/SearchList'
import { useSearchContainer } from './useSearchContainer'

const SearchContainer: FC = () => {
	const { isSuccess, handleSearch, handleClear, data, searchTerm } =
		useSearchContainer()

	return (
		<div className={styles.search}>
			<SearchField
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				handleClear={handleClear}
			/>
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	)
}

export default SearchContainer
