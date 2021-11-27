import React from 'react'

export enum CardVariant{
   outline = "outline",
   primary = "primary"
}

interface CardProps {
   width?: string,
   height?: string,
   children?: React.ReactChild | React.ReactNode,
   variant?: CardVariant,
   onClick?: (num: number) => void
}

export default function Card({width, height, children, variant, onClick}: CardProps) {
   return (
      <div 
         onClick={() => onClick(123)}
         style={{
            border: variant === CardVariant.outline ? '1px solid #ccc' : 'none',
            background: variant === CardVariant.primary ? '#050505' : '',
            width, 
            height, 
         }}
      >
         {children}
      </div>
   )
}


