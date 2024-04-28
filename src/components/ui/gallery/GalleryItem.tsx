import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './Gallery.module.scss'
import { IGalleryItemProps } from './gallery-item.interface'

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => {
	return (
		<Link href={item.url}>
			<div
				className={classNames(styles.item, {
					[styles.withText]: item.content,
					[styles.horizontal]: variant === 'horizontal',
					[styles.vertical]: variant === 'vertical'
				})}
			>
				<Image
					fill
					sizes="auto"
					alt={item.name}
					src={item.posterPath}
					draggable={false}
					priority
				/>
				{item.content && (
					<div className={styles.content}>
						<div className={styles.title}>{item.content.title}</div>
						{item.content.subTitle && (
							<div className={styles.subTitle}>
								{item.content.subTitle}
							</div>
						)}
					</div>
				)}
			</div>
		</Link>
	)
}

export default GalleryItem
