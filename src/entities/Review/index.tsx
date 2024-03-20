import type { ReactNode } from 'react'
import styles from './Review.module.scss'
import Card from '@/shared/ui/components/Card'
import Image from 'next/image'
import Icon from '@/shared/ui/components/Icon'
import type { ReviewProps } from './Review.props'

export const Review = (props: ReviewProps): ReactNode => {
	return (
		<Card className={styles.review}>
			<div className={styles.author}>
				<Image className={styles.avatar} alt="Аватар пользователя" width={60} height={60} src={props.avatarUrl} />
				<div className={styles.data}>
					<span className={styles.username}>{props.name}</span>
					<div className={styles.rate}>
						<Icon name="star" />
						<Icon name="star" />
						<Icon name="star" />
						<Icon name="star" />
						<Icon name="star" />
					</div>
				</div>
			</div>
			<div className={styles.text}>{props.text}</div>
		</Card>
	)
}