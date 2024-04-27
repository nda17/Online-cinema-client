import MaterialIcon from '@/ui/icons/MaterialIcon'
import classNames from 'classnames'
import { FC } from 'react'
import styles from './SlideArrow.module.scss'
import { ISlideArrow } from './slider-arrow.interface'

const SlideArrow: FC<ISlideArrow> = ({ clickHandler, variant }) => {
	const isLeft = variant === 'left'

	return (
		<button
			onClick={clickHandler}
			className={classNames(styles.arrow, {
				[styles.left]: isLeft,
				[styles.right]: !isLeft
			})}
		>
			<MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
		</button>
	)
}

export default SlideArrow
