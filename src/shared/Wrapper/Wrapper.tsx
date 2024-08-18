import { clsx } from 'clsx'
import { FC, ReactNode } from 'react'

import css from './Wrapper.module.scss'

interface WrapperProps {
    className?: string
    children: ReactNode
}

export const Wrapper: FC<WrapperProps> = ({ className, children }) => (
    <div className={clsx(css.wrapper, className)}>{children}</div>
)
