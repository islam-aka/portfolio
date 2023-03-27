import { useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const ThemeProvider = ({ children, ...props }) => {
	const [theme, setTheme] = useState('light')

	const chandeTheme = str => {
		setTheme(str)
	}
	return (
		<ThemeContext.Provider
			value={{
				theme,
				chandeTheme,
			}}
			{...props}
		>
			{children}
		</ThemeContext.Provider>
	)
}
