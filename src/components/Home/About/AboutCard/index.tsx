import styles from './index.module.scss'
import type { ReactNode, HTMLAttributes } from 'react'

import { Body1 } from '@/shared/ui/components'
import dynamic from 'next/dynamic'

const Title3 = dynamic(() => import('@/shared/ui/components/Title3'))

interface AboutCardProps extends HTMLAttributes<HTMLDivElement> {
	cardTitle: ReactNode | string
	description: string
}

export const AboutCard = ({ cardTitle, description, ...props }: AboutCardProps): ReactNode => {
	return (
		<section {...props}>
			<Title3 className={styles.title}>{cardTitle}</Title3>
			<Body1>{description}</Body1>
		</section>
	)
}
