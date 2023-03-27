import React from 'react'
import styles from './Footer.module.scss'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<h2 className={styles.title}>Контакты</h2>
			<h4 className={styles.subTitle}>
				Хотите поболтать? <br /> Добро пожаловать!
			</h4>
			<div>
				<button className={styles.btn}>
					<a
						href='https://t.me/Mimanov_Islamjan'
						target='_blank'
						rel='noreferrer noopener'
					>
						Написать
					</a>
				</button>
			</div>
			<div className={styles.social}>
				<div className={styles.telegram}>
					<a
						href='https://t.me/Mimanov_Islamjan'
						target='_blank'
						rel='noreferrer noopener'
					>
						<FaTelegramPlane />
					</a>
				</div>
				<div className={styles.logo}>
					<a
						href='https://api.whatsapp.com/send/?phone=996551788107&text=Здравствуйте%2C+у+меня+есть+вопрос'
						target='_blank'
						rel='noreferrer noopener'
					>
						<BsWhatsapp />
					</a>
				</div>
				<div className={styles.logo}>
					<a
						href='https://www.instagram.com/19_m.i.m99/'
						target='_blank'
						rel='noreferrer noopener'
					>
						<FiInstagram />
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
