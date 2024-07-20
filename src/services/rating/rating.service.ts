import { getRatingsUrl } from '@/configs/api.config'
import axiosInterceptorsRequest from 'api/interceptors'

export const RatingService = {
	async setRating(movieId: string, value: number) {
		return axiosInterceptorsRequest.post<string>(
			getRatingsUrl('/set-rating'),
			{
				movieId,
				value
			}
		)
	},

	async getByUserMovie(movieId: string) {
		return axiosInterceptorsRequest.get<number>(
			getRatingsUrl(`/${movieId}`)
		)
	}
}
