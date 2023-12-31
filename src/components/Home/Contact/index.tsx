import styles from './index.module.scss'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import type { ReactNode } from 'react'

const Card = dynamic(() => import('@/ui/components/Card'))

const ContactForm = dynamic(() => import('@/components/ContactForm'))

const Title3 = dynamic(() => import('@/ui/components/Title3'))
const MarkedList = dynamic(() => import('@/ui/components/MarkedList'))

const Contact = (): ReactNode => {
	return (
		<article className={`container ${styles.container}`} id='contact'>
			<MarkedList>
				<li className={`observe ${styles.item}`}>
					Уже нашли подходящую услугу и хотите заказать? Или еще не нашли, и хотите получить помощь в выборе?
				</li>
				<li className={`observe ${styles.item}`}>
					Оставьте контакты, свяжусь, обсудим ваш проект и подберем тариф - это бесплатно и не отнимет много времени
				</li>
				<li className={`observe ${styles.item}`}>
					Если не ответил в течении 1-2 дней, можете оставить заявку еще раз или написать на почту напрямую - hello@fb24m.ru
				</li>
				<li className={`observe ${styles.item}`}>
					При спаме заявками могу не ответить вовсе. Цените мое и ваше время
				</li>
				<li className={`observe ${styles.item}`}>
					Работаю только по предоплате 50%
				</li>
			</MarkedList>
			<Card size='big'>
				<Title3 className={styles.title}>Обратная связь</Title3>
				<ContactForm idPrefix="contact-block" />
			</Card>
			<div className={styles.block}>
				<Image width={380} height={380} src="/img/home/contact.png" alt="" />
			</div>
		</article>
	)
}

export default Contact
