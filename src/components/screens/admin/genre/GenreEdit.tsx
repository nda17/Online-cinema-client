'use client'
import { IParamsUrl } from '@/shared/types/params-url.types'
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Button from '@/ui/form-elements/Button'
import Field from '@/ui/form-elements/Field'
import SlugField from '@/ui/form-elements/SlugField/SlugField'
import Heading from '@/ui/heading/Heading'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
import generateSlug from '@/utils/string/generateSlug'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import styles from './GenreEdit.module.scss'
import { IGenreEditInput } from './genre-edit.interface'
import { useGenreEdit } from './useGenreEdit'

const GenreEdit: FC<IParamsUrl> = ({ params }) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues
	} = useForm<IGenreEditInput>({
		mode: 'onChange'
	})

	const { isLoading, onSubmit } = useGenreEdit(setValue, params)

	return (
		<>
			<AdminNavigation />
			<Heading title="Edit genre" />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
							className={styles.field}
							{...register('name', {
								required: 'Name is required!'
							})}
							placeholder="Name"
							error={errors.name}
						/>
						<Button>Update</Button>
					</>
				)}
			</form>
		</>
	)
}

export default GenreEdit
