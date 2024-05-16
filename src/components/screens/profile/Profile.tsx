'use client'
import AuthFields from '@/components/shared/AuthFields/AuthFields'
import styles from '@/components/shared/contentWrapper.module.scss'
import userForm from '@/components/shared/user/userForm.module.scss'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/subheading/SubHeading'
import Button from '@/ui/form-elements/Button'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
import classNames from 'classnames'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import profile from './Profile.module.scss'
import { IProfileInput } from './profile.interface'
import useProfile from './useProfileEdit'

const Profile: FC = () => {
	const { handleSubmit, register, formState, setValue } =
		useForm<IProfileInput>({
			mode: 'onChange'
		})

	const { isLoading, data, onSubmit } = useProfile(setValue)

	return (
		<div className={styles.contentWrapper}>
			<div className={profile.profile}>
				<Heading title="Profile" />

				<SubHeading title="Subscription status" />
				<div className={profile.subscription}>
					<span
						className={classNames({
							['text-[#28b54d]']: data,
							['text-red-600']: !data
						})}
					>
						{isLoading ? (
							<SkeletonLoader count={2} className="h-8 mb-4" />
						) : (
							`${data ? 'Subscription is active' : 'Subscription'} 
							${data ? 'until' : 'is not active.'} ${
								data ? 'N/D.' : 'Renew your subscription.'
							}`
						)}
					</span>
				</div>

				<SubHeading title="Editing profile" />
				<form onSubmit={handleSubmit(onSubmit)} className={userForm.form}>
					{isLoading ? (
						<SkeletonLoader count={2} className="h-8 mb-4" />
					) : (
						<AuthFields
							register={register}
							formState={formState}
							isPasswordRequired
						/>
					)}

					<Button>Update</Button>
				</form>
			</div>
		</div>
	)
}

export default Profile
