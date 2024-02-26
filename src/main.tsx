import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './globals.scss'
import MainProvider from './app/providers/MainProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<MainProvider>
		<HashRouter>
			<App />
		</HashRouter>
	</MainProvider>
)
