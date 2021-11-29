import React from 'react'

export enum CardVariant{
    outlined = 'outlined',
    primary  = 'primary'
}

interface CardProps{
    width?: string;
    height?: string;
    children?: React.ReactNode | React.ReactChild,
    variant: CardVariant,
    onClick: (num: number) => void;
}

export const Card: React.FC<CardProps> = ({width, height, children, variant}) => {
    // eslint-disable-next-line
   
    return (
        <div
            style={{width, height, 
                background:variant === CardVariant.primary ? 'lightgray': '', 
                border: variant === CardVariant.outlined ? '1px solid gray' : 'none'
            }}
        >
            {children}
        </div>
    )
}

