import { useDebounce } from '@/hooks/useDebounce'
import { MovieService } from '@/services/movie/movie.service'
import { ChangeEvent, MouseEvent, useState } from 'react'
import { useQuery } from 'react-query'

export const useSearchContainer = () => {
	const [searchTerm, setSearchTerm] = useState('')

	const debouncedSearch = useDebounce(searchTerm, 500)

	const { isSuccess, data } = useQuery(
		['search movie list', debouncedSearch],
		() => MovieService.getMoviesList(debouncedSearch),
		{
			select: ({ data }) => data,
			enabled: !!debouncedSearch
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const handleClear = (e: MouseEvent<HTMLSpanElement>) => {
		setSearchTerm('')
	}

	return { isSuccess, handleSearch, handleClear, data, searchTerm }
}
