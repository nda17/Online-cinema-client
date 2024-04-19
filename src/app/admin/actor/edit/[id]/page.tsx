import ActorEdit from '@/screens/admin/actor/ActorEdit'
import { IParamsUrl } from '@/shared/types/params-url.types'
import { NextPage } from 'next'

const ActorEditPage: NextPage<IParamsUrl> = ({ params }) => {
	return <ActorEdit params={params} />
}

export default ActorEditPage
