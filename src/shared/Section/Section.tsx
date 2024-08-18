import { clsx } from 'clsx'
import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

import styles from './Section.module.scss'

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
}

export const Section = forwardRef<HTMLElement, PropsWithChildren<SectionProps>>(
    ({ className, children, ...props }, ref) => (
        <section
            className={clsx(styles.section, className)}
            ref={ref}
            {...props}
        >
            {children}
        </section>
    ),
)

Section.displayName = 'Section'
