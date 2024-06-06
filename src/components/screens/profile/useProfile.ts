import { UserService } from '@/services/user/user.service'
import { toastrError } from '@/utils/api/toastr-error-redux'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { IUserEditInput } from '../admin/user/user-edit.interface'
import { IProfileInput } from './profile.interface'

const useProfile = (setValue: UseFormSetValue<IUserEditInput>) => {
	const { data } = useQuery(
		'get subscription and confirmation profile',
		() => UserService.getProfile(),
		{
			select: (data) => data.data
		}
	)

	const { isLoading } = useQuery(
		'profile',
		() => UserService.getProfile(),
		{
			onSuccess({ data }) {
				setValue('email', data.email)
			},

			onError(error) {
				toastrError(error, 'Get profile')
			}
		}
	)

	const { mutateAsync } = useMutation(
		'update profile',
		(data: IProfileInput) => UserService.updateProfile(data),
		{
			onSuccess() {
				toastr.success('Update profile', 'update was successful')
			},

			onError(error) {
				toastrError(error, 'Update profile')
			}
		}
	)

	const onSubmit: SubmitHandler<IProfileInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading, data }
}

export default useProfile
