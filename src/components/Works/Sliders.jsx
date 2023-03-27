import React, { useEffect, useState } from 'react'
import styles from './Works.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'
import axios from 'axios'

const Sliders = ({ inView, direction }) => {
	const [works, setWorks] = useState([])
	const getWorks = async () => {
		await axios
			.get(`https://641c8c9fb556e431a8717d13.mockapi.io/works`)
			.then(res => {
				const persons = res.data
				setWorks(persons)
			})
	}

	useEffect(() => {
		getWorks()
	}, [])

	return (
		<div className={styles.slider}>
			<Swiper
				onClick={() => console.log(inView)}
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className='mySwiper'
			>
				{works.map((item, id) => {
					if (item.direction === direction) {
						return (
							<SwiperSlide key={id} className={styles.slider__item}>
								{inView && (
									<a href={item.name} target='_blank' rel='noreferrer noopener'>
										<img className={styles.active} src={item.url} alt='work' />
									</a>
								)}
							</SwiperSlide>
						)
					}
					return null
				})}
			</Swiper>
		</div>
	)
}

export default Sliders
