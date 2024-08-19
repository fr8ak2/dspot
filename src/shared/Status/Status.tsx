import { Box } from '@/shared'

import styles from './Status.module.scss'

export const Status = ({ status }: { status: string }) => (
    <Box className={styles.module}>{status}</Box>
)
