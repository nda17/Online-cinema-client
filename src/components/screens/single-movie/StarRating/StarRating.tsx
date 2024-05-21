'use client'
import { useAuth } from '@/hooks/useAuth'
import MaterialIcon from '@/ui/icons/MaterialIcon'
import AuthButton from '@/ui/video-player/placeholder-screens/AuthPlaceholder/AuthButton'
import { FC, useEffect, useState } from 'react'
import styles from './StarRating.module.scss'
import { IStarRating } from './star-rating.interface'
import { useStarRating } from './useStarRating'

const StarRating: FC<IStarRating> = ({
	count = 5,
	icon = 'MdStar',
	defaultStarColor = { color: '#4f4f4f' },
	activeStarColor = { color: '#ffd700' },
	slug,
	_id
}) => {
	const { user } = useAuth()
	const { handleClick, isSended, rating } = useStarRating(_id)

	const stars = Array(count).fill(0)

	const [currentItem, setCurrentItem] = useState(0)
	const [hoverItem, setHoverItem] = useState(0)

	useEffect(() => {
		setHoverItem(rating - 1)
	}, [rating])

	return (
		<div className={styles.rating}>
			{user ? (
				<>
					{isSended ? (
						<div className={styles.thanks}>Thanks for rating!</div>
					) : (
						<>
							<h3>How do you like the movie ?</h3>
							<p>Ratings improve recommendations</p>
							<div>
								{stars.map((_, index: number) => {
									const currentStyle =
										index <= currentItem
											? activeStarColor
											: defaultStarColor
									const hoverStyle =
										index <= hoverItem ? activeStarColor : defaultStarColor
									return (
										<span
											key={index}
											style={{ ...currentStyle, ...hoverStyle }}
											onMouseMove={() => setHoverItem(index)}
											onMouseOut={() => setHoverItem(rating - 1)}
											onClick={() => {
												setCurrentItem(index), handleClick(index + 1)
											}}
										>
											<MaterialIcon name={icon} />
										</span>
									)
								})}
							</div>
						</>
					)}
				</>
			) : (
				<AuthButton slug={slug} />
			)}
		</div>
	)
}

export default StarRating
