'use client'
import Heading from '@/ui/heading/Heading'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import styles from './EmailConfirmation.module.scss'

const EmailСonfirmation: FC<{
	status: string
}> = ({ status }) => {
	const { replace } = useRouter()

	setTimeout(() => {
		replace('/')
	}, 5000)

	return (
		<div className={styles.auth}>
			<div className={styles.authContainer}>
				<Heading title="Auth | Email confirmation" />
				<div className={styles.wrapper}>
					{status === 'Email confirmed.' ? (
						<>
							<p className="text-[#28b54d] mb-4">{status}</p>
							<p className="text-[#28b54d] italic">
								Redirect to Home page after 5 seconds...
							</p>
						</>
					) : (
						<>
							<p className="text-primary mb-4">{status}</p>
							<p className="text-primary italic">
								Redirect to Home page after 5 seconds...
							</p>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default EmailСonfirmation
