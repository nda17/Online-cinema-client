import { IMovie } from '@/shared/types/movie.types'

export interface ISlide
	extends Pick<IMovie, '_id' | 'title' | 'bigPoster' | 'rating'> {
	subTitle: string
	url: string
}
