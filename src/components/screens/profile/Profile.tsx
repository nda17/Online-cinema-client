'use client'
import AuthFields from '@/components/shared/AuthFields/AuthFields'
import styles from '@/components/shared/contentWrapper.module.scss'
import userForm from '@/components/shared/user/userForm.module.scss'
import { UserService } from '@/services/user/user.service'
import Button from '@/ui/form-elements/Button'
import Heading from '@/ui/heading/Heading'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
import { toastrError } from '@/utils/api/toastr-error-redux'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { IProfileInput } from './profile.interface'

const Profile: FC = () => {
	const { handleSubmit, register, formState, setValue } =
		useForm<IProfileInput>({
			mode: 'onChange'
		})

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
			onError(error) {
				toastrError(error, 'Update profile')
			},
			onSuccess() {
				toastr.success('Update profile', 'update was successful')
			}
		}
	)

	const onSubmit: SubmitHandler<IProfileInput> = async (data) => {
		await mutateAsync(data)
	}

	return (
		<div className={styles.contentWrapper}>
			<Heading title="Editing profile" />
			<form onSubmit={handleSubmit(onSubmit)} className={userForm.form}>
				{isLoading ? (
					<SkeletonLoader count={2} className="h-8 mb-4" />
				) : (
					<AuthFields
						register={register}
						formState={formState}
						isPasswordRequired={false}
					/>
				)}

				<Button>Update</Button>
			</form>
		</div>
	)
}

export default Profile
