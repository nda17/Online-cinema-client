'use client'
import SpinnerLoader from '@/ui/spinner-loader/SpinnerLoader'
import dynamic from 'next/dynamic'
import { FC } from 'react'
const Auth = dynamic(() => import('@/screens/auth/Auth'), {
	loading: () => <SpinnerLoader />,
	ssr: false
})

const DynamicAuth: FC = () => {
	return <Auth />
}

export default DynamicAuth
