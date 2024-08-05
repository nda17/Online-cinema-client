import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
import VideoPlayerMini from '@/ui/video-player-mini/VideoPlayerMini'
import Image from 'next/image'
import { FC } from 'react'
import { IUploadField } from '../form.interface'
import styles from '../form.module.scss'
import { useUpload } from './useUpload'

const UploadField: FC<IUploadField> = ({
	placeholder,
	error,
	style,
	image,
	folder,
	onChange,
	isNoImage = false
}) => {
	const { uploadFile, isLoading } = useUpload(onChange, folder)

	return (
		<div className={styles.formUpload}>
			<div className={styles.uploadContainer} style={style}>
				<label>
					<span>{placeholder}</span>
					<input type="file" onChange={uploadFile} />
					{error && (
						<div className={styles.error}>{error.message?.toString()}</div>
					)}
				</label>
				{
					<div className={styles.imageContainer}>
						{isLoading ? (
							<div className="w-full h-full">
								<SkeletonLoader count={1} className="w-full h-full" />
							</div>
						) : !isNoImage ? (
							image && <Image src={image} alt="Image" fill unoptimized />
						) : (
							<VideoPlayerMini videoSource={image} />
						)}
					</div>
				}
			</div>
		</div>
	)
}

export default UploadField
