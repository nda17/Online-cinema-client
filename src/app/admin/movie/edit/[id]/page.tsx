import MovieEdit from '@/screens/admin/movie/MovieEdit'
import { IParamsUrl } from '@/shared/types/params-url.types'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
	title: 'Edit movie | Online-Cinema',
	description: 'Movie creation and editing page.'
}

const MovieEditPage: NextPage<IParamsUrl> = ({ params }) => {
	return <MovieEdit params={params} />
}

export default MovieEditPage
