import { MovieService } from '@/services/movie/movie.service'
import { useEffect } from 'react'
import { useMutation } from 'react-query'

export const useUpdateCountOpened = (slug: string) => {
	const { mutateAsync } = useMutation('update actor', () =>
		MovieService.updateCountOpened(slug)
	)

	useEffect(() => {
		mutateAsync()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
}
