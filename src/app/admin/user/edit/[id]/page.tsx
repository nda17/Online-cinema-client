import UserEdit from '@/screens/admin/user/UserEdit'
import { IParamsUrl } from '@/shared/types/params-url.types'
import { NextPage } from 'next'

const UserEditPage: NextPage<IParamsUrl> = ({ params }) => {
	return <UserEdit params={params} />
}

export default UserEditPage
