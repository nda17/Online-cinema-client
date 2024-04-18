'use client'
import formStyles from '@/components/shared/admin/adminForm.module.scss'
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
			<div className={'wrapper'}>
				<Heading title="Edit genre" />
				<form
					onSubmit={handleSubmit(onSubmit)}
					className={formStyles.form}
				>
					{isLoading ? (
						<SkeletonLoader count={3} />
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
								{...register('name', {
									required: 'Name is required!'
								})}
								placeholder="Name"
								error={errors.name}
							/>

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
							<Button>Update</Button>
						</>
					)}
				</form>
			</div>
		</>
	)
}

export default GenreEdit
