import { IMovie } from '@/shared/types/movie.types'
import { IGalleryItem } from '@/ui/gallery/gallery.interface'

export interface ISingleMoviePage {
	movie: IMovie
	similarMovies: IGalleryItem[]
}
