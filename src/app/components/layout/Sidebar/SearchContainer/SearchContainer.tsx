import { SearchField } from '@/components/ui/search-field/SearchField'
import { FC } from 'react'
import styles from './SearchContainer.module.scss'
import SearchList from './SearchList/SearchList'
import { useSearchContainer } from './useSearchContainer'

const SearchContainer: FC = () => {
	const { isSuccess, handleSearch, data, searchTerm } = useSearchContainer()

	return (
		<div className={styles.searchWrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	)
}

export default SearchContainer
