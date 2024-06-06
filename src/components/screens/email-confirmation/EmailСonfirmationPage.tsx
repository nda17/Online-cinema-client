import styles from '@/components/shared/contentWrapper.module.scss'
import Description from '@/ui/description/Description'
import Heading from '@/ui/heading/Heading'
import { FC } from 'react'

const EmailСonfirmationPage: FC<{
	status: string
}> = ({ status }) => {
	const title = 'Email confirmation'

	return (
		<div className={styles.contentWrapper}>
			<Heading title={title} />
			<Description text={status} />
		</div>
	)
}

export default EmailСonfirmationPage
