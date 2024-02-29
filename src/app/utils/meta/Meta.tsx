import { siteName, titleMerge } from '@/configs/seo.config'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'
import logoImage from '../../assets/images/logo.svg'
import { onlyText } from '../string/clearText'
import { MetaNoIndex } from './MetaNoIndex'
import { ISeo } from './meta.interface'

const Meta: FC<ISeo> = ({
	title,
	description,
	image = null,
	children
}) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`
	return (
		<>
			{description ? (
				<Head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
					<title itemProp="headline">{titleMerge(title)}</title>
					<meta
						itemProp="description"
						content={onlyText(description, 152)}
					/>
					<link rel="canonical" href={currentUrl} />
					<meta property="og:locale" content="en" />
					<meta property="og:title" content={titleMerge(title)} />
					<meta property="og:url" content={currentUrl} />
					<meta property="og:image" content={image || logoImage} />
					<meta property="og:site_name" content={siteName} />
					<meta
						property="og:description"
						content={onlyText(description, 197)}
					/>
				</Head>
			) : (
				<MetaNoIndex title={title} />
			)}
			{children}
		</>
	)
}

export default Meta
