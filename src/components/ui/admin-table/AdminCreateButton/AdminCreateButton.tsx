import Button from '@/ui/form-elements/Button'
import { FC } from 'react'
import { IAdminCreateButton } from './admin-create-button.interface'

const AdminCreateButton: FC<IAdminCreateButton> = ({ onClick }) => {
	return <Button onClick={onClick}>Create new</Button>
}

export default AdminCreateButton
