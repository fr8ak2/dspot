import { clsx } from 'clsx'

import styles from './Loading.module.scss'

export const Loading = ({ className }: { className?: string }) => (
    <div className={clsx(styles.module, className)}>Loading...</div>
)
