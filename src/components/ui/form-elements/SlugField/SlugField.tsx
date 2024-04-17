import { FC } from 'react'
import Field from '../Field'
import styles from './SlugField.module.scss'
import { ISlugField } from './slug-field.interface'

const SlugField: FC<ISlugField> = ({ generate, register, error }) => {
	return (
		<div className="relative">
			<Field
				{...register('slug', {
					required: 'Slug is required!'
				})}
				placeholder="Slug"
				error={error}
			/>

			<div className={styles.badge} onClick={generate}>
				Generate
			</div>
		</div>
	)
}

export default SlugField
