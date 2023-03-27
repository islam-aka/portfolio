import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './provider/ThemeProdiver'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>
)
