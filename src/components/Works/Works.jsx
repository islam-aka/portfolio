import React from 'react'
import styles from './Works.module.scss'
import Sliders from './Sliders'
import { useInView } from 'react-intersection-observer'

const Works = () => {
	const [ref, inView] = useInView()

	return (
		<div className={styles.works} ref={ref}>
			<h2 className={styles.title}>
				Работы <br /> сделано на:
			</h2>
			<div className={styles.sliders}>
				<h4>HTML/CSS/JS</h4>
				<Sliders inView={inView} direction='html' />
			</div>
			<div className={styles.sliders}>
				<h4>React.js/Next.js/TypeScript</h4>
				<Sliders inView={inView} direction='react' />
			</div>
		</div>
	)
}

export default Works
