import MovieEdit from '@/screens/admin/movie/MovieEdit'
import { IParamsUrl } from '@/shared/types/params-url.types'
import { NextPage } from 'next'

const MovieEditPage: NextPage<IParamsUrl> = ({ params }) => {
	return <MovieEdit params={params} />
}

export default MovieEditPage
