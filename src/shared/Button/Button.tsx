import { clsx } from 'clsx'
import Link from 'next/link'
import {
    FC,
    HTMLAttributes,
    MouseEvent,
    PropsWithChildren,
    useCallback,
    useMemo,
} from 'react'

import styles from './Button.module.scss'

interface ButtonInterface extends HTMLAttributes<HTMLElement> {
    className?: string
    to?: string
    target?: string
    role?: string
    onClick?: (e: MouseEvent<HTMLElement>) => void
    disabled?: boolean
    type?: 'button' | 'submit'
}

const ButtonContent: FC<PropsWithChildren> = ({ children }) => {
    return <>{children}</>
}

export const Button: FC<PropsWithChildren<ButtonInterface>> = ({
    className,
    to,
    target,
    onClick,
    disabled = false,
    type = 'button',
    role,
    children,
    ...props
}) => {
    const content = useMemo(
        () => <ButtonContent>{children}</ButtonContent>,
        [children],
    )

    const classname = useMemo(() => {
        return clsx(styles.button, className, { '--disabled': disabled })
    }, [disabled, className])

    const clickHandler = useCallback(
        (e: MouseEvent<HTMLElement>) => {
            onClick?.(e)
        },
        [onClick],
    )

    if (to) {
        return (
            <Link
                className={classname}
                href={to}
                target={target}
                rel={target === '_blank' ? 'noreferrer noopener' : undefined}
                role={role}
                {...props}
            >
                <span>{content}</span>
            </Link>
        )
    }

    return (
        <button
            type={type}
            onClick={clickHandler}
            className={classname}
            disabled={disabled}
            {...props}
        >
            <span>{content}</span>
        </button>
    )
}
