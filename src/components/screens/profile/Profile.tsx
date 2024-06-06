'use client'
import AuthFields from '@/components/shared/AuthFields/AuthFields'
import styles from '@/components/shared/contentWrapper.module.scss'
import userForm from '@/components/shared/user/userForm.module.scss'
import Button from '@/ui/form-elements/Button'
import Heading from '@/ui/heading/Heading'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
import SubHeading from '@/ui/subheading/SubHeading'
import classNames from 'classnames'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import profile from './Profile.module.scss'
import { IProfileInput } from './profile.interface'
import useProfile from './useProfile'

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

				<SubHeading title="Confirmation Email" />
				<div className={profile.fieldStatus}>
					<span
						className={classNames({
							['text-[#28b54d]']: data?.isActivated,
							['text-red-600']: !data?.isActivated
						})}
					>
						{isLoading ? (
							<SkeletonLoader count={2} className="h-8 mb-4" />
						) : (
							`${
								data?.isActivated
									? 'Email confirmed.'
									: 'Email not verified. An email with a confirmation link has been sent to the email address you provided during registration.'
							}`
						)}
					</span>
				</div>

				<SubHeading title="Subscription status" />
				<div className={profile.fieldStatus}>
					<>
						{isLoading ? (
							<SkeletonLoader count={2} className="h-8 mb-4" />
						) : !data?.isActivated ? (
							<span
								className={classNames({
									['text-[#28b54d]']: data?.isActivated,
									['text-red-600']: !data?.isActivated
								})}
							>
								To view your subscription status, email confirmation is
								required.
							</span>
						) : (
							<span
								className={classNames({
									['text-[#28b54d]']: data?.isSubscription,
									['text-red-600']: !data?.isSubscription
								})}
							>
								{`${
									data?.isSubscription
										? 'Subscription is active'
										: 'Subscription'
								}
								${data?.isSubscription ? 'until' : 'is not active.'}
								${data?.isSubscription ? 'N/D.' : 'Renew your subscription.'}
								`}
							</span>
						)}
					</>
				</div>

				<SubHeading title="Editing profile" />
				{data?.isActivated ? (
					<form
						onSubmit={handleSubmit(onSubmit)}
						className={userForm.form}
					>
						{isLoading ? (
							<SkeletonLoader count={2} className="h-8 mb-4" />
						) : (
							<AuthFields register={register} formState={formState} />
						)}

						<Button>Update</Button>
					</form>
				) : (
					<div className={classNames(profile.fieldStatus, 'text-red-600')}>
						To edit your profile, confirmation by email is required.
					</div>
				)}
			</div>
		</div>
	)
}

export default Profile
