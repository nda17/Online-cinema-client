import GenreEdit from '@/screens/admin/genre/GenreEdit'
import { IParamsUrl } from '@/shared/types/params-url.types'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
	title: 'Edit genre | Online-Cinema',
	description: 'Genre creation and editing page.'
}

const GenreEditPage: NextPage<IParamsUrl> = ({ params }) => {
	return <GenreEdit params={params} />
}

export default GenreEditPage
