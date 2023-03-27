import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Language.module.scss'

const Language = () => {
	const [info, setInfo] = useState()
	const [localRU, setLocalRU] = useState(true)
	const [localEN, setLocalEN] = useState(true)
	const { i18n } = useTranslation()

	const changleLanguage = lang => {
		i18n.changeLanguage(lang)
		console.log(lang);
	}

	const check = lank => {
		changleLanguage(lank)
		if (localStorage.getItem('i18nextLng')) {
			const data = localStorage.getItem('i18nextLng')
			if (data === 'ru') {
				setLocalRU(false)
				setLocalEN(true)
				setInfo('ru')
			} else {
				setLocalEN(false)
				setLocalRU(true)
				setInfo('en')
			}
		}
	}
	useEffect(() => {
		check()
	}, [localRU, localEN])

	return (
		<div className={styles.language}>
			<p className={styles.active} onClick={() => changleLanguage('ru')}>RU</p>
			<p className={styles.line}>|</p>
			<p className={styles.noActive} onClick={() => changleLanguage('en')}>ENG</p>
		</div>
	)
}

export default Language
