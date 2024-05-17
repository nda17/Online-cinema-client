import ActorEdit from '@/screens/admin/actor/ActorEdit'
import { IParamsUrl } from '@/shared/types/params-url.types'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
	title: 'Edit actor | Online-Cinema',
	description: 'Actor creation and editing page.'
}

const ActorEditPage: NextPage<IParamsUrl> = ({ params }) => {
	return <ActorEdit params={params} />
}

export default ActorEditPage
