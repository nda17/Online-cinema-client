'use client'
import adminForm from '@/components/shared/admin/adminForm.module.scss'
import adminWrapper from '@/components/shared/admin/adminWrapper.module.scss'
import { IParamsUrl } from '@/shared/types/params-url.types'
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Button from '@/ui/form-elements/Button'
import Field from '@/ui/form-elements/Field'
import SlugField from '@/ui/form-elements/SlugField/SlugField'
import UploadField from '@/ui/form-elements/UploadField/UploadField'
import Heading from '@/ui/heading/Heading'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
import generateSlug from '@/utils/string/generateSlug'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import styles from './MovieEdit.module.scss'
import { IMovieEditInput } from './movie-edit.interface'
import { useAdminActors } from './useAdminActors'
import { useAdminGenres } from './useAdminGenres'
import { useMovieEdit } from './useMovieEdit'

const DynamicSelect = dynamic(() => import('@/ui/select/Select'), {
	ssr: false
})

const MovieEdit: FC<IParamsUrl> = ({ params }) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues
	} = useForm<IMovieEditInput>({
		mode: 'onChange'
	})

	const { isLoading, onSubmit } = useMovieEdit(setValue, params)
	const { data: genres, isLoading: isGenresLoading } = useAdminGenres()
	const { data: actors, isLoading: isActorsLoading } = useAdminActors()

	return (
		<>
			<AdminNavigation />
			<div className={adminWrapper.wrapper}>
				<Heading title="Edit movie" />
				<form onSubmit={handleSubmit(onSubmit)} className={adminForm.form}>
					{isLoading ? (
						<div className="mb-8">
							<SkeletonLoader count={8} className="h-8 mb-4" />
						</div>
					) : (
						<>
							<Field
								{...register('title', {
									required: 'Title is required!'
								})}
								placeholder="Title"
								error={errors.title}
							/>

							<SlugField
								generate={() =>
									setValue('slug', generateSlug(getValues('title')))
								}
								register={register}
								error={errors.slug}
							/>

							<Field
								{...register('parameters.country', {
									required: 'Country is required!'
								})}
								placeholder="Country"
								error={errors.parameters?.country}
							/>

							<Field
								{...register('parameters.duration', {
									required: 'Duration is required!'
								})}
								placeholder="Duration (min.)"
								error={errors.parameters?.duration}
							/>

							<Field
								{...register('parameters.year', {
									required: 'Year is required!'
								})}
								placeholder="Year"
								error={errors.parameters?.year}
							/>

							<Field
								{...register('rating', {
									required: 'Rating is required!'
								})}
								placeholder="rating"
								error={errors.rating}
							/>

							<Controller
								control={control}
								name="license"
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										field={field}
										options={
											[
												{ label: 'subscription', value: 'subscription' },
												{ label: 'free', value: 'free' }
											] || []
										}
										isLoading={isLoading}
										placeholder="License"
										error={error}
									/>
								)}
								rules={{
									required: 'Please select an option to access content!'
								}}
							/>

							<Controller
								control={control}
								name="genres"
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										field={field}
										options={genres || []}
										isLoading={isGenresLoading}
										isMulti
										placeholder="Genres"
										error={error}
									/>
								)}
								rules={{
									required: 'Please select at least one genre!'
								}}
							/>

							<Controller
								name="actors"
								control={control}
								rules={{
									required: 'Please select at least one actor!'
								}}
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										error={error}
										field={field}
										placeholder="Actors"
										options={actors || []}
										isLoading={isActorsLoading}
										isMulti
									/>
								)}
							/>

							<div className={styles.controller}>
								<Controller
									control={control}
									name="poster"
									defaultValue=""
									render={({
										field: { value, onChange },
										fieldState: { error }
									}) => (
										<UploadField
											onChange={onChange}
											image={value}
											error={error}
											folder="movies"
											placeholder="Poster"
										/>
									)}
									rules={{
										required: 'Poster is required!'
									}}
								/>
							</div>

							<div className={styles.controller}>
								<Controller
									control={control}
									name="bigPoster"
									defaultValue=""
									render={({
										field: { value, onChange },
										fieldState: { error }
									}) => (
										<UploadField
											onChange={onChange}
											image={value}
											error={error}
											folder="movies"
											placeholder="Big poster"
										/>
									)}
									rules={{
										required: 'Big poster is required!'
									}}
								/>
							</div>

							<div className={styles.controller}>
								<Controller
									control={control}
									name="videoUrl"
									defaultValue=""
									render={({
										field: { value, onChange },
										fieldState: { error }
									}) => (
										<UploadField
											onChange={onChange}
											image={value}
											error={error}
											folder="movies"
											placeholder="Video"
											isNoImage
										/>
									)}
									rules={{
										required: 'Poster is required!'
									}}
								/>
							</div>

							<Button>Update</Button>
						</>
					)}
				</form>
			</div>
		</>
	)
}

export default MovieEdit
