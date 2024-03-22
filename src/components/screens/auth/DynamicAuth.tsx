'use client'
import dynamic from 'next/dynamic'
import { FC } from 'react'
const Auth = dynamic(() => import('@/screens/auth/Auth'), {
	ssr: false
})

const DynamicAuth: FC = () => {
	return <Auth />
}

export default DynamicAuth
