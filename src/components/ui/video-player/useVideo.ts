import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { IVideoElement } from './video.types'

export const useVideo = () => {
	const videoRef = useRef<IVideoElement>(null)

	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [videoTime, setVideoTime] = useState(0)
	const [muteStatus, setMuteStatus] = useState(true)
	const [progress, setProgress] = useState(0)

	//Replay
	const replay = useCallback(() => {
		if (videoRef.current?.currentTime === videoTime) {
			setCurrentTime(0.8)
			videoRef.current?.play()
			setIsPlaying(true)
		}
	}, [videoTime])

	//Fast revert
	const fastRevert = () => {
		if (videoRef.current) {
			videoRef.current.currentTime -= 5
		}
	}

	//Play / paused
	const toggleVideo = useCallback(() => {
		if (!isPlaying) {
			videoRef.current?.play()
			setIsPlaying(true)
		} else {
			videoRef.current?.pause()
			setIsPlaying(false)
		}
	}, [isPlaying])

	//Fast forward
	const fastForward = () => {
		if (videoRef.current) {
			videoRef.current.currentTime += 5
		}
	}

	//Mute / unmute sound
	const mute = () => {
		if (videoRef.current) {
			videoRef.current.muted = !videoRef.current.muted
			setMuteStatus(!videoRef.current.muted)
		}
	}

	//Fast forward by clicking on the progress bar
	const changeTime = (e: number) => {
		if (videoRef.current) {
			videoRef.current.currentTime = e
		}
	}

	//Full screen mode
	const fullScreen = () => {
		const video = videoRef.current

		if (!video) {
			return
		}

		if (video.requestFullscreen) {
			video.requestFullscreen()
		} else if (video.msRequestFullscreen) {
			video.msRequestFullscreen()
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen()
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen()
		}
	}

	//Progress bar / time code
	useEffect(() => {
		const video = videoRef.current

		if (!video) {
			return
		}

		const updateProgress = () => {
			setCurrentTime(video.currentTime)
			setProgress((video.currentTime / videoTime) * 100)
		}

		video.addEventListener('timeupdate', updateProgress)

		return () => {
			video.removeEventListener('timeupdate', updateProgress)
		}
	}, [videoTime])

	//Video duration
	useEffect(() => {
		if (videoRef.current?.duration) {
			setVideoTime(videoRef.current.duration)
		}
	}, [videoRef.current?.duration])

	//Keyboard playback control
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			switch (e.key) {
				case 'ArrowRight': {
					fastForward()
					break
				}

				case 'ArrowLeft': {
					fastRevert()
					break
				}

				case ' ': {
					e.preventDefault()
					toggleVideo()
					break
				}

				case 'f': {
					fullScreen()
					break
				}

				default: {
					return
				}
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [toggleVideo])

	const value = useMemo(
		() => ({
			videoRef,
			actions: {
				replay,
				fastRevert,
				toggleVideo,
				fastForward,
				mute,
				changeTime,
				fullScreen
			},

			video: {
				isPlaying,
				currentTime,
				videoTime
			}
		}),
		[currentTime, isPlaying, videoTime, replay, toggleVideo]
	)

	return value
}
