import { PUBLIC_PAGES } from '@/configs/pages/public.config'
import axiosInterceptorsRequest from 'api/interceptors'

export const RatingService = {
	async setRating(movieId: string, value: number) {
		return axiosInterceptorsRequest.post<string>(
			`${PUBLIC_PAGES.RATINGS}/set-rating`,
			{
				movieId,
				value
			}
		)
	},

	async getByUserMovie(movieId: string) {
		return axiosInterceptorsRequest.get<number>(
			`${PUBLIC_PAGES.RATINGS}/${movieId}`
		)
	}
}
