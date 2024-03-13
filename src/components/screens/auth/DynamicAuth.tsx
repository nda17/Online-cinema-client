'use client'
import MainProvider from '@/providers/MainProvider/MainProvider'
import dynamic from 'next/dynamic'
import { FC } from 'react'
const Auth = dynamic(() => import('@/screens/auth/Auth'), {
	ssr: false
})

const DynamicAuth: FC = () => {
	return (
		<MainProvider>
			<Auth />
		</MainProvider>
	)
}

export default DynamicAuth
