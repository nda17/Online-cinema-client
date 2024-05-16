export interface IVideoPlayer {
	videoSource: string | undefined
	license: string
	slug: string
}

export interface IVideoElement extends HTMLVideoElement {
	msRequestFullscreen?: () => void
	mozRequestFullScreen?: () => void
	webkitRequestFullscreen?: () => void
}
