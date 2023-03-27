import React from 'react'
import Language from '../Language/Language'
import styles from './Header.module.scss'
import NavBar from './NavBar/NavBar'
import Theme from './Theme/Theme'

const Header = () => {
	return (
		<header className={styles.container}>
			<div className={styles.header}>
				<NavBar />
				<div className={styles.click}>
					<Language />
					<Theme />
				</div>
			</div>
		</header>
	)
}

export default Header
