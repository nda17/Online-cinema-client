import { useAuth } from '@/hooks/useAuth'
import { UserService } from '@/services/user/user.service'
import classNames from 'classnames'
import { FC, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import MaterialIcon from '../icons/MaterialIcon'
import ProgressBar from './ProgressBar/ProgressBar'
import styles from './VideoPlayer.module.scss'
import AuthPlaceholder from './placeholder-screens/AuthPlaceholder/AuthPlaceholder'
import ConfirmEmailPlaceholder from './placeholder-screens/ConfirmEmailPlaceholder/ConfirmEmailPlaceholder'
import LoadingPlaceholder from './placeholder-screens/LoadingPlaceholder/LoadingPlaceholderVideo'
import SubscriptionPlaceholder from './placeholder-screens/SubscriptionPlaceholder/SubscriptionPlaceholder'
import { useVideo } from './useVideo'
import { IVideoPlayer } from './video.types'

const VideoPlayer: FC<IVideoPlayer> = ({ videoSource, license, slug }) => {
	const { actions, videoRef, video } = useVideo()
	const { user } = useAuth()
	const [dataReceived, setDataReceived] = useState(false)

	const {
		isLoading: isLoadingStatusSubscription,
		data: statusSubscription
	} = useQuery(
		'get subscription status user ',
		() => UserService.getProfile(),
		{
			select: (data) => data.data.isSubscription,
			enabled: !!user
		}
	)

	const {
		isLoading: isLoadingStatusConfirmationEmail,
		data: statusConfirmationEmail
	} = useQuery(
		'get confirmation email status user',
		() => UserService.getProfile(),
		{
			select: (data) => data.data.isActivated,
			enabled: !!user
		}
	)

	useEffect(() => {
		!isLoadingStatusSubscription && !isLoadingStatusConfirmationEmail
			? setDataReceived(true)
			: setDataReceived(false)
	}, [isLoadingStatusSubscription, isLoadingStatusConfirmationEmail])

	return (
		<>
			{!dataReceived ? <LoadingPlaceholder /> : null}

			{dataReceived && !user && <AuthPlaceholder />}

			{dataReceived && user && !statusConfirmationEmail && (
				<ConfirmEmailPlaceholder />
			)}

			{dataReceived &&
				user &&
				statusConfirmationEmail &&
				!statusSubscription &&
				license === 'subscription' && (
					<SubscriptionPlaceholder slug={slug} />
				)}

			{dataReceived &&
				user &&
				statusConfirmationEmail &&
				!statusSubscription &&
				license !== 'subscription' && (
					<div className={classNames(styles.player)}>
						<video
							ref={videoRef}
							className={styles.video}
							src={`${videoSource}#t=4`}
							preload="metadata"
						/>

						{video.currentTime === video.videoTime && (
							<button
								onClick={actions.replay}
								className={styles.buttonReplay}
							>
								<MaterialIcon name="MdRestartAlt" />
							</button>
						)}

						<ProgressBar
							min={0.4}
							max={video.videoTime - 1.19425}
							value={video.currentTime}
							onChange={(e: any) =>
								actions.changeTime(Number(e.target.value))
							}
						/>

						<div className={styles.controls}>
							<div>
								<button onClick={actions.fastRevert}>
									<MaterialIcon name="MdHistory" />
								</button>

								<button
									onClick={actions.toggleVideo}
									className={styles.playButton}
								>
									<MaterialIcon
										name={video.isPlaying ? 'MdPause' : 'MdPlayArrow'}
									/>
								</button>

								<button onClick={actions.fastForward}>
									<MaterialIcon name="MdUpdate" />
								</button>

								<button onClick={actions.mute}>
									<MaterialIcon
										name={
											videoRef.current?.muted
												? 'MdVolumeOff'
												: 'MdVolumeUp'
										}
									/>
								</button>

								<div className={styles.timeControls}>
									<p className={styles.controlsTime}>
										{Math.floor(video.currentTime / 60) +
											':' +
											('0' + Math.floor(video.currentTime % 60)).slice(-2)}
									</p>
									<p> / </p>
									<p className={styles.controlsTime}>
										{Math.floor(video.videoTime / 60) +
											':' +
											('0' + Math.floor(video.videoTime % 60)).slice(-2)}
									</p>
								</div>
							</div>

							<div>
								<button onClick={actions.fullScreen}>
									<MaterialIcon name="MdFullscreen" />
								</button>
							</div>
						</div>
					</div>
				)}

			{user && statusConfirmationEmail && statusSubscription && (
				<div className={classNames(styles.player)}>
					<video
						ref={videoRef}
						className={styles.video}
						src={`${videoSource}#t=4`}
						preload="metadata"
					/>

					{video.currentTime === video.videoTime && (
						<button
							onClick={actions.replay}
							className={styles.buttonReplay}
						>
							<MaterialIcon name="MdRestartAlt" />
						</button>
					)}

					<ProgressBar
						min={0.4}
						max={video.videoTime - 1.19425}
						value={video.currentTime}
						onChange={(e: any) =>
							actions.changeTime(Number(e.target.value))
						}
					/>

					<div className={styles.controls}>
						<div>
							<button onClick={actions.fastRevert}>
								<MaterialIcon name="MdHistory" />
							</button>

							<button
								onClick={actions.toggleVideo}
								className={styles.playButton}
							>
								<MaterialIcon
									name={video.isPlaying ? 'MdPause' : 'MdPlayArrow'}
								/>
							</button>

							<button onClick={actions.fastForward}>
								<MaterialIcon name="MdUpdate" />
							</button>

							<button onClick={actions.mute}>
								<MaterialIcon
									name={
										videoRef.current?.muted ? 'MdVolumeOff' : 'MdVolumeUp'
									}
								/>
							</button>

							<div className={styles.timeControls}>
								<p className={styles.controlsTime}>
									{Math.floor(video.currentTime / 60) +
										':' +
										('0' + Math.floor(video.currentTime % 60)).slice(-2)}
								</p>
								<p> / </p>
								<p className={styles.controlsTime}>
									{Math.floor(video.videoTime / 60) +
										':' +
										('0' + Math.floor(video.videoTime % 60)).slice(-2)}
								</p>
							</div>
						</div>

						<div>
							<button onClick={actions.fullScreen}>
								<MaterialIcon name="MdFullscreen" />
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default VideoPlayer
