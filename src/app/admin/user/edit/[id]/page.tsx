import UserEdit from '@/screens/admin/user/UserEdit'
import { IParamsUrl } from '@/shared/types/params-url.types'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
	title: 'Edit user | Online-Cinema',
	description: 'User data editing page.'
}

const UserEditPage: NextPage<IParamsUrl> = ({ params }) => {
	return <UserEdit params={params} />
}

export default UserEditPage
