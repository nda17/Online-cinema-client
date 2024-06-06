'use client'
import styles from '@/components/shared/contentWrapper.module.scss'
import Description from '@/ui/description/Description'
import Heading from '@/ui/heading/Heading'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

const EmailСonfirmationPage: FC<{
	status: string
}> = ({ status }) => {
	const title = 'Email confirmation'
	const { replace } = useRouter()

	setTimeout(() => {
		replace('/')
	}, 5000)

	return (
		<div className={styles.contentWrapper}>
			<Heading title={title} />
			<Description text={status} />
			<p className="text-[#28b54d] italic">
				Redirect to home page after 5 seconds...
			</p>
		</div>
	)
}

export default EmailСonfirmationPage
