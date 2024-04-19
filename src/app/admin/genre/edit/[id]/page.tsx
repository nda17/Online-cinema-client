import GenreEdit from '@/screens/admin/genre/GenreEdit'
import { IParamsUrl } from '@/shared/types/params-url.types'
import { NextPage } from 'next'

const GenreEditPage: NextPage<IParamsUrl> = ({ params }) => {
	return <GenreEdit params={params} />
}

export default GenreEditPage
