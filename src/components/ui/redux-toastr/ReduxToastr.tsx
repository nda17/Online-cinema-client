import { FC } from 'react'
import ReduxToastrLib from 'react-redux-toastr'

const ReduxToastr: FC = () => {
	return (
		<ReduxToastrLib
			newestOnTop={false}
			preventDuplicates
			progressBar
			closeOnToastrClick
			position={'top-right'}
			timeOut={3000}
			transitionIn="fadeIn"
			transitionOut="fadeOut"
		/>
	)
}

export default ReduxToastr
