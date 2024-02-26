import { SearchField } from '@/app/components/ui/search-field/SearchField'
import { FC } from 'react'
import styles from './Search.module.scss'
import SearchList from './SearchList/SearchList'
import { useSearch } from './useSearchContainer'

const Search: FC = () => {
	const { isSuccess, handleSearch, data, searchTerm } = useSearch()

	return (
		<div className={styles.wrapperSearch}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	)
}

export default Search
