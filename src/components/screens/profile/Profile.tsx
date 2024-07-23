'use client'
import EmailPasswordFields from '@/components/shared/AuthFields/EmailPasswordFields/EmailPasswordFields'
import styles from '@/components/shared/contentWrapper.module.scss'
import userForm from '@/components/shared/user/userForm.module.scss'
import { UserService } from '@/services/user/user.service'
import Button from '@/ui/form-elements/Button'
import Heading from '@/ui/heading/Heading'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
import SubHeading from '@/ui/subheading/SubHeading'
import classNames from 'classnames'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import profile from './Profile.module.scss'
import { IProfileInput } from './profile.interface'
import useProfile from './useProfile'

const Profile: FC = () => {
	const [sent, setSent] = useState(false)

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
							<SkeletonLoader count={1} className="h-8 mb-4" />
						) : (
							`${
								data?.isActivated
									? 'Email confirmed.'
									: 'Email not verified. An email with a confirmation link has been sent to the email address you provided during registration.'
							}`
						)}
					</span>
				</div>

				{!isLoading && !data?.isActivated && (
					<>
						<SubHeading title="Did not get the email ?" />
						<div className={profile.fieldSendEmailAgain}>
							{!sent ? (
								<button
									type="button"
									onClick={async () => {
										await UserService.resendingEmailConfirmationLink()
										setSent(true)
									}}
								>
									Send the confirmation link again
								</button>
							) : (
								<p>
									A follow-up email with a confirmation link was sent to
									your email address
								</p>
							)}
						</div>
					</>
				)}

				<SubHeading title="Editing profile" />
				{data?.isActivated ? (
					<form
						onSubmit={handleSubmit(onSubmit)}
						className={userForm.form}
					>
						{isLoading ? (
							<SkeletonLoader count={1} className="h-8 mb-4" />
						) : (
							<EmailPasswordFields
								register={register}
								formState={formState}
							/>
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
