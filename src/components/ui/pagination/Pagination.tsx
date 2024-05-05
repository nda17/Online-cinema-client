import classNames from 'classnames'
import React, { FC } from 'react'
import MaterialIcon from '../icons/MaterialIcon'
import styles from './Pagination.module.scss'
import { IPagination } from './paginate.interface'

const Pagination: FC<IPagination> = ({
	listPage,
	currentPage,
	prevPage,
	nextPage,
	changeActivePage
}) => {
	return (
		<div className={styles.pagination}>
			<button onClick={prevPage} type="button">
				<MaterialIcon name="MdOutlineNavigateBefore" />
			</button>
			<ul>
				{listPage.map((page) => (
					<li key={page}>
						<span
							className={classNames({
								[styles.activeItem]: page === currentPage
							})}
							key={page}
							onClick={() => changeActivePage(page)}
						>
							{page}
						</span>
					</li>
				))}
			</ul>
			<button onClick={nextPage} type="button">
				<MaterialIcon name="MdOutlineNavigateNext" />
			</button>
		</div>
	)
}

export default React.memo(Pagination)
