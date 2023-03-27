import React from 'react'
import styles from './Skills.module.scss'

const Skills = () => {
	return (
		<div className={styles.skills}>
			<h2 className={styles.title}>
				Профессиональные <br /> качества
			</h2>
			<ul>
				<li>
					<div className={styles.circle}></div>
					<span className={styles.text}>HTML</span>
				</li>
				<li>
					<div className={styles.circle}></div>
					<span className={styles.text}>JavaScript</span>
				</li>
				<li>
					<div className={styles.circle}></div>
					<span className={styles.text}>Next.JS</span>
				</li>
				<li>
					<div className={styles.circle}></div>
					<span className={styles.text}>CSS/SASS</span>
				</li>
				<li>
					<div className={styles.circle}></div>
					<span className={styles.text}>TypeScript</span>
				</li>
				<li>
					<div className={styles.circle}></div>
					<span className={styles.text}>Tailwind CSS</span>
				</li>
				<li>
					<div className={styles.circle}></div>
					<span className={styles.text}>Bootstrap</span>
				</li>
				<li>
					<div className={styles.circle}></div>
					<span className={styles.text}>React.JS</span>
				</li>
				<li>
					<div className={styles.circle}></div>
					<span className={styles.text}>GIT</span>
				</li>
			</ul>
		</div>
	)
}

export default Skills
