import React, { useEffect } from 'react'
import styles from './Theme.module.scss'
import { BsFillSunFill } from 'react-icons/bs'
import { BsFillMoonFill } from 'react-icons/bs'
import { useTheme } from '../../../hooks/useTheme'

const Theme = () => {
	const theme = useTheme()

	const changeTheme = () => {
		theme.chandeTheme(theme.theme === 'light' ? 'dark' : 'light')
	}
	useEffect(() => {
		const root = document.querySelector(':root')

		const components = [
			'body-background',
			'components-background',
			'text-color',
			'textNoActive',
			'box-shadow',
		]

		components.forEach(component => {
			root.style.setProperty(
				`--${component}-defaut`,
				`var(--${component}-${theme.theme})`
			)
		})
	}, [theme.theme])

	return (
		<div className={styles.theme} onClick={changeTheme}>
			{theme.theme === 'light' ? (
				<BsFillSunFill
					width={25}
					color={theme.theme === 'light' ? '#070707' : '#ffffff'}
				/>
			) : (
				<BsFillMoonFill
					width={25}
					color={theme.theme === 'light' ? '#070707' : '#ffffff'}
				/>
			)}
		</div>
	)
}

export default Theme
