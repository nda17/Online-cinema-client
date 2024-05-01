import { IMovie } from '@/shared/types/movie.types'

export interface ISlide
	extends Pick<IMovie, '_id' | 'bigPoster' | 'title'> {
	subTitle: string
	url: string
}
