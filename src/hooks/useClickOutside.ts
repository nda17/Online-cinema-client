import { useEffect } from 'react'

/* eslint-disable */
const useClickOutside = (
	ref: React.MutableRefObject<HTMLElement | null>,
	callback: () => void
) => {
	const handleClick = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			callback()
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClick)

		return () => {
			document.removeEventListener('mousedown', handleClick)
		}
	}, [])
}

export { useClickOutside }
