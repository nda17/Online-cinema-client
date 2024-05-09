import { IActor, IMovie } from '@/shared/types/movie.types'

export interface IActorPage {
	movies: IMovie[] | undefined
	actor: IActor
}
