import { IVideoPlayer } from '../video-player/video.types'

export interface IVideoPlayerMini extends Omit<IVideoPlayer, 'slug'> {}
