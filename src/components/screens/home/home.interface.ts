import { IGalleryItem } from '@/ui/gallery/gallery.interface'
import { ISlide } from '@/ui/slider/slider.interface'

export interface IHomePage {
	slidesMovies: ISlide[]
	popularMovies: IGalleryItem[]
	actors: IGalleryItem[]
}
