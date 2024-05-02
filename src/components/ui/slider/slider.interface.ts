import { IMovie } from '@/shared/types/movie.types'

export interface ISlide
	extends Pick<IMovie, '_id' | 'slug' | 'genres' | 'title' | 'bigPoster'> {
	subTitle: string
	url: string
}
