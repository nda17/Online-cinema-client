'use client'
import { accentColor } from '@/configs/constants'
import NextTopLoader from 'nextjs-toploader'

const ProgressBarLoader = () => {
	return (
		<NextTopLoader
			color={accentColor}
			initialPosition={0.08}
			crawlSpeed={200}
			height={3}
			crawl={true}
			showSpinner={false}
			easing="ease"
			speed={200}
			shadow="0 0 10px #191b1f,0 0 5px #191b1f"
			zIndex={1600}
			showAtBottom={false}
		/>
	)
}

export default ProgressBarLoader
