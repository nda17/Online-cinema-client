import { UserService } from '@/services/user/user.service'
import { useQuery } from 'react-query'

export const useFavorites = () => {
	const {
		isLoading,
		data: movies,
		refetch,
	} = useQuery('Favorite movies', () => UserService.getFavorites(), {
		select: ({ data }) => data
	})

	return { isLoading, movies, refetch }
}
