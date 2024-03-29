import type { PopupBodyProps } from './PopupBody.props'

import styles from './PopupBody.module.scss'
import type { ReactNode } from 'react'
import { classList } from '@/functions/classList'

const PopupBody = ({ className, children, ...props }: PopupBodyProps): ReactNode => {
	return (
		<div {...props} {...classList(className, styles.popupBody)}>
			{children}
		</div>
	)
}

export default PopupBody
