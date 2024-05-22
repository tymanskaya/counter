
import * as React from 'react';

type ButtonPropsType = {
    title: string
    onClick: () => void
    className?: string
    disabled?: boolean

}

export const Button = ({ title, onClick, className, disabled }: ButtonPropsType) => {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            {title}
        </button>
    )
}