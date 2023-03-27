import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import MainScreen from '../components/MainScreen/MainScreen'
import Skills from '../components/Skills/Skills'
import Works from '../components/Works/Works'
import styles from './Home.module.scss'

const Home = () => {
	return (
		<div className={styles.home}>
			<div className={styles.emptyBlock}></div>
			<Header />
			<MainScreen />
			<div className={styles.home__line}></div>
			<Skills />
			<Works />
			<div className={styles.home__line}></div>
			<Footer />
		</div>
	)
}

export default Home
