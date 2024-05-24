import { useAuth } from '@/hooks/useAuth'
import { RatingService } from '@/services/rating/rating.service'
import { toastrError } from '@/utils/api/toastr-error-redux'
import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

export const useStarRating = (movieId: string) => {
	const [rating, setRating] = useState(0)
	const [isSended, setIsSended] = useState(false)

	const { user } = useAuth()

	const { refetch } = useQuery(
		['your movie rating', movieId],
		() => RatingService.getByUserMovie(movieId),
		{
			onSuccess({ data }) {
				setRating(data)
			},

			onError(error) {
				toastrError(error, 'Get rating')
			},
			
			enabled: !!movieId && !!user
		}
	)

	const { mutateAsync: rateMovie } = useMutation(
		'set rating movie',
		({ value }: { value: number }) =>
			RatingService.setRating(movieId, value),
		{
			onSuccess() {
				toastr.success('Rate movie', 'You have successfully rated!')

				setIsSended(true)
				refetch()

				setTimeout(() => {
					setIsSended(false)
				}, 2400)
			},

			onError(error) {
				toastrError(error, 'Rate movie')
			}
		}
	)

	const handleClick = async (nextValue: number) => {
		setRating(nextValue)
		await rateMovie({ value: nextValue })
	}

	return {
		isSended,
		rating,
		handleClick
	}
}
