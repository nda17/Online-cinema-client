'use client'
import { UserService } from '@/services/user/user.service'
import { toastrError } from '@/utils/api/toastr-error-redux'
import classNames from 'classnames'
import { FC, useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { useFavorites } from '../../favorites/useFavorites'
import styles from './FavoriteButton.module.scss'
import { IFavoriteButton } from './favorite-button.interface'
import HeartImage from './heart-animation.png'
import { useAuth } from '@/hooks/useAuth'

const FavoriteButton: FC<IFavoriteButton> = ({ movieId }) => {
	const { user } = useAuth()
	const [isSmashed, setIsSmashed] = useState(false)

	const { movies, refetch } = useFavorites()

	useEffect(() => {
		if (movies) {
			const isHasMovie = movies.some((movie) => movie._id === movieId)
			if (isSmashed !== isHasMovie) setIsSmashed(isHasMovie)
		}
	}, [movies, isSmashed, movieId])

	const { mutateAsync } = useMutation(
		'update favorites movies',
		() => UserService.toggleFavorite(String(movieId)),
		{
			onSuccess() {
				setIsSmashed(!isSmashed)
				refetch()
			},

			onError(error) {
				toastrError(error, 'Update favorite list')
			}
		}
	)

	return (
		user && <button
			onClick={() => mutateAsync()}
			className={classNames(styles.button, {
				[styles.animate]: isSmashed
			})}
			style={{ backgroundImage: `url(${HeartImage.src})` }}
		/>
	)
}

export default FavoriteButton
