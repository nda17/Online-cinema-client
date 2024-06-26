'use client'
import adminForm from '@/components/shared/admin/adminForm.module.scss'
import adminWrapper from '@/components/shared/admin/adminWrapper.module.scss'
import { IParamsUrl } from '@/shared/types/params-url.types'
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Button from '@/ui/form-elements/Button'
import Field from '@/ui/form-elements/Field'
import SlugField from '@/ui/form-elements/SlugField/SlugField'
import Heading from '@/ui/heading/Heading'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
import generateSlug from '@/utils/string/generateSlug'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'
import styles from './GenreEdit.module.scss'
import { IGenreEditInput } from './genre-edit.interface'
import { useGenreEdit } from './useGenreEdit'

const DynamicTextEditor = dynamic(
	() => import('@/ui/form-elements/TextEditor'),
	{
		ssr: false
	}
)

const GenreEdit: FC<IParamsUrl> = ({ params }) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control
	} = useForm<IGenreEditInput>({
		mode: 'onChange'
	})

	const { isLoading, onSubmit } = useGenreEdit(setValue, params)

	return (
		<>
			<AdminNavigation />
			<div className={adminWrapper.wrapper}>
				<Heading title="Edit genre" />
				<form onSubmit={handleSubmit(onSubmit)} className={adminForm.form}>
					{isLoading ? (
						<div className="mb-8">
							<SkeletonLoader count={3} className="h-8 mb-4" />
						</div>
					) : (
						<>
							<Field
								{...register('name', {
									required: 'Name is required!'
								})}
								placeholder="Name"
								error={errors.name}
							/>

							<SlugField
								register={register}
								error={errors.slug}
								generate={() => {
									setValue('slug', generateSlug(getValues('name')))
								}}
							/>

							<Field
								{...register('icon', {
									required: 'Icon is required!'
								})}
								placeholder="Icon"
								error={errors.icon}
							/>
							<div className={styles.controller}>
								<Controller
									name="description"
									control={control}
									defaultValue=""
									render={({
										field: { value, onChange },
										fieldState: { error }
									}) => (
										<DynamicTextEditor
											placeholder="Description"
											onChange={onChange}
											error={error}
											value={value}
										/>
									)}
									rules={{
										validate: {
											required: (value) =>
												(value && stripHtml(value).result.length > 0) ||
												'Description is required!'
										}
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

export default GenreEdit
