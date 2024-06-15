'use client'
import { useAuth } from '@/hooks/useAuth'
import { UserService } from '@/services/user/user.service'
import { FC, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import MaterialIconRating from './MaterialIconRating'
import styles from './StarRating.module.scss'
import { IStarRating } from './star-rating.interface'
import { useStarRating } from './useStarRating'

const StarRating: FC<IStarRating> = ({
	count = 5,
	icon = 'MdStar',
	defaultStarColor = { color: '#4f4f4f' },
	activeStarColor = { color: '#ffd700' },
	_id
}) => {
	const { user } = useAuth()
	const { data: statusConfirmationEmail } = useQuery(
		'get confirmation email status',
		() => UserService.getProfile(),
		{
			select: (data) => data.data.isActivated,
			enabled: !!user
		}
	)

	const { handleClick, isSended, rating } = useStarRating(_id)

	const stars = Array(count).fill(0)

	const [currentItem, setCurrentItem] = useState(0)
	const [hoverItem, setHoverItem] = useState(0)

	useEffect(() => {
		setHoverItem(rating - 1)
	}, [rating, user, statusConfirmationEmail])

	return (
		<div className={styles.rating}>
			{user && statusConfirmationEmail ? (
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
											<MaterialIconRating name={icon} />
										</span>
									)
								})}
							</div>
						</>
					)}
				</>
			) : (
				<div className="flex justify-center items-center">
					<p className="text-[1.125rem] leading-normal text-primary">
						{!user && !statusConfirmationEmail && 'Login to rate the film'}
					</p>
					<p className="text-[1.125rem] leading-normal text-primary">
						{user &&
							!statusConfirmationEmail &&
							'Confirm your email to rate the film'}
					</p>
				</div>
			)}
		</div>
	)
}

export default StarRating
