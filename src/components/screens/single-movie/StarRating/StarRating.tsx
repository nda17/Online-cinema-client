'use client'
import { useAuth } from '@/hooks/useAuth'
import { UserService } from '@/services/user/user.service'
import { FC, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import MaterialIconRating from './MaterialIconRating'
import styles from './StarRating.module.scss'
import AuthPlaceholderRating from './placeholder-screens/AuthPlaceholder/AuthPlaceholderRating'
import ConfirmEmailPlaceholderRating from './placeholder-screens/ConfirmEmailPlaceholder/ConfirmEmailPlaceholderRating'
import LoadingPlaceholderRating from './placeholder-screens/LoadingPlaceholder/LoadingPlaceholderRating'
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
	const [dataReceived, setDataReceived] = useState(false)

	const { isLoading, data: statusConfirmationEmail } = useQuery(
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

	useEffect(() => {
		!isLoading ? setDataReceived(true) : setDataReceived(false)
	}, [isLoading])

	return (
		<>
			{!dataReceived ? <LoadingPlaceholderRating /> : null}

			{dataReceived && user && statusConfirmationEmail && (
				<div className={styles.rating}>
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
				</div>
			)}

			{dataReceived && !user && !statusConfirmationEmail && (
				<AuthPlaceholderRating />
			)}

			{dataReceived && user && !statusConfirmationEmail && (
				<ConfirmEmailPlaceholderRating />
			)}
		</>
	)
}

export default StarRating
