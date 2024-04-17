import GenreEdit from '@/screens/admin/genre/GenreEdit'
import { IGenreId } from '@/screens/admin/genre/genre-edit.interface'
import { NextPage } from 'next'

const GenreEditPage: NextPage<IGenreId> = ({ params }) => {
	return <GenreEdit params={params} />
}

export default GenreEditPage
