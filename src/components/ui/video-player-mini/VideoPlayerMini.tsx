import { FC } from 'react'
import styles from './VideoPlayerMini.module.scss'
import { IVideoPlayerMini } from './video-player-mini.interface'

const VideoPlayerMini: FC<IVideoPlayerMini> = ({ videoSource }) => {
	return (
		<video
			className={styles.player}
			src={`${videoSource}#t=8`}
			autoPlay
			muted
			loop
		/>
	)
}

export default VideoPlayerMini
