import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './NavBar.module.scss'
import '../../../i18next'

const NavBar = () => {
	const { t } = useTranslation()
	return (
		<nav className={styles.navBar}>
			<ul>
				<li >{t('nav.me')}</li>
				<li className={styles.active}>{t('nav.skills')}</li>
				<li>{t('nav.works')}</li>
				<li>{t('nav.contacts')}</li>
			</ul>
		</nav>
	)
}

export default NavBar
