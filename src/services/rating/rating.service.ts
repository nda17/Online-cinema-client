import { PUBLIC_PATH } from '@/configs/api.config'
import axiosInterceptorsRequest from 'api/interceptors'

export const RatingService = {
	async setRating(movieId: string, value: number) {
		return axiosInterceptorsRequest.post<string>(
			PUBLIC_PATH.ratingsUrl('/set-rating'),
			{
				movieId,
				value
			}
		)
	},

	async getByUserMovie(movieId: string) {
		return axiosInterceptorsRequest.get<number>(
			PUBLIC_PATH.ratingsUrl(`/${movieId}`)
		)
	}
}
