import { useAuth } from '@/hooks/useAuth'
import { UserService } from '@/services/user/user.service'
import { useQuery } from 'react-query'

export const useFavorites = () => {
	const { user } = useAuth()

	const {
		isLoading,
		data: movies,
		refetch
	} = useQuery('Favorite movies', () => UserService.getFavorites(), {
		select: ({ data }) => data,
		enabled: !!user
	})

	return { isLoading, movies, refetch }
}
