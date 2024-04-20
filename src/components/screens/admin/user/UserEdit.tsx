'use client'
import { IParamsUrl } from '@/shared/types/params-url.types'
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Button from '@/ui/form-elements/Button'
import Heading from '@/ui/heading/Heading'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import AuthFields from '../../auth/AuthFields'
import { useUserEdit } from '../user/useUserEdit'
import { IUserEditInput } from './user-edit.interface'

const UserEdit: FC<IParamsUrl> = ({ params }) => {
	const { handleSubmit, register, formState, setValue, control } =
		useForm<IUserEditInput>({
			mode: 'onChange'
		})

	const { isLoading, onSubmit } = useUserEdit(setValue, params)

	return (
		<>
			<AdminNavigation />
			<div className={'wrapper'}>
				<Heading title="Edit user" />
				<form onSubmit={handleSubmit(onSubmit)} className="admin-form">
					{isLoading ? (
						<SkeletonLoader count={3} />
					) : (
						<>
							<AuthFields
								register={register}
								formState={formState}
								isPasswordRequired={false}
							/>

							<Controller
								name="isAdmin"
								control={control}
								render={({ field }) => (
									<button
										onClick={(e) => {
											e.preventDefault()
											field.onChange(!field.value)
										}}
										className="text-link block mb-7"
									>
										{field.value
											? 'Assign user role'
											: 'Assign admin role'}
									</button>
								)}
							/>
						</>
					)}

					<Button>Update</Button>
				</form>
			</div>
		</>
	)
}

export default UserEdit
