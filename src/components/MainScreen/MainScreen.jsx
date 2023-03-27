import React from 'react'
import styles from './MainScreen.module.scss'
import myPhoto from '../../assets/img/myPhoto.png'

const MainScreen = () => {
	return (
		<div className={styles.mainScreen}>
			<div className={styles.mainScreen__left}>
				<img src={myPhoto} alt='my avatar' />
			</div>
			<div className={styles.mainScreen__right}>
				<h2 className={styles.mainScreen__right_title}>
					Исламжан <br /> Миманов
				</h2>
				<ul className={styles.mainScreen__right_subTitle}>
					<li>
						Привет, я JavaScript-разработчик из Бишкека. Я интересуюсь
						программированием. Начал увлекаться программирование с 2019, но
						занялся этим в серьёз в 2021
					</li>
					<li>Ранее занимался ремонтом и обслуживанием компьютерной техники</li>
					<li>Готов реализовывать отличные проекты с замечательными людьми.</li>
				</ul>
			</div>
		</div>
	)
}

export default MainScreen
