import MoviesList from '@/screens/admin/movies/MoviesList'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
	title: 'Admin panel | Online-Cinema'
}

const MoviesListPage: NextPage = () => {
	return <MoviesList />
}

export default MoviesListPage
