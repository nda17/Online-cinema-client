import { IMovie } from '@/shared/types/movie.types'
import { IGalleryItem } from '@/ui/gallery/gallery.interface'

export interface IMoviePage {
	movie: IMovie
	similarMovies: IGalleryItem[]
}
