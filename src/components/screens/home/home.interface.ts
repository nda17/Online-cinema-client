import { IMovie } from '@/shared/types/movie.types'
import { ISlide } from '@/ui/slider/slider.interface'

export interface ISlideMovie
	extends Pick<IMovie, '_id' | 'bigPoster' | 'title'> {}

export interface IHome {
	slides: ISlide[]
}
