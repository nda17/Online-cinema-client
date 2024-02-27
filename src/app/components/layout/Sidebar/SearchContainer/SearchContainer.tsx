import { SearchField } from '@ui/search-field/SearchField'
import { FC } from 'react'
import styles from './Search.module.scss'
import SearchList from './SearchList/SearchList'
import { useSearchContainer } from './useSearchContainer'

const SearchContainer: FC = () => {
	const { isSuccess, handleSearch, data, searchTerm } = useSearchContainer()

	return (
		<div className={styles.wrapperSearch}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	)
}

export default SearchContainer
