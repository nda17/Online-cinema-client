import { ADMIN_URL } from '@/configs/url.config'
import { UserService } from '@/services/user/user.service'
import { toastrError } from '@/utils/api/toastr-error-redux'
import { useRouter } from 'next/navigation'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { IUserEditInput } from './user-edit.interface'

export const useUserEdit = (
	setValue: UseFormSetValue<IUserEditInput>,
	params: { id: string }
) => {
	const { push } = useRouter()

	const userId = params.id

	const { isLoading } = useQuery(
		['user', userId],
		() => UserService.getUserById(userId),
		{
			onSuccess({ data }) {
				setValue('email', data.email)
				setValue('isAdmin', data.isAdmin)
				setValue('isSubscription', data.isSubscription)
			},

			onError(error) {
				toastrError(error, 'Get user')
			},
			enabled: !!params.id
		}
	)

	const { mutateAsync } = useMutation(
		'update user',
		(data: IUserEditInput) => UserService.updateUser(userId, data),
		{
			onSuccess() {
				toastr.success('Update user', 'update was successful')
				push(ADMIN_URL.rootUrl('/users'))
			},
			
			onError(error) {
				toastrError(error, 'Update user')
			}
		}
	)

	const onSubmit: SubmitHandler<IUserEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
