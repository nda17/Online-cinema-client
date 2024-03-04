import { useDebounce } from '@/hooks/useDebounce'
import { MovieService } from '@/services/movie/movie.service'
import { ChangeEvent, MouseEvent, useState } from 'react'
import { useQuery } from 'react-query'

export const useSearchContainer = () => {
	const [searchValue, setSearchValue] = useState('')

	const debouncedSearch = useDebounce(searchValue, 500)

	const { isSuccess, data } = useQuery(
		['search movie list', debouncedSearch],
		() => MovieService.getMovies(debouncedSearch),
		{
			select: ({ data }) => data,
			enabled: !!debouncedSearch
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	const handleClear = (e: MouseEvent<HTMLSpanElement>) => {
		setSearchValue('')
	}

	return { isSuccess, handleSearch, handleClear, data, searchValue }
}
