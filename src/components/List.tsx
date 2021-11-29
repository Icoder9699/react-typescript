import React, { FC } from 'react'

export interface ListProps<T> {
    items: T[];
    renderedItem: (item: T) => React.ReactNode
}

export function List<T>(props: ListProps<T>){
    return (
        <div>
            {props.items.map(props.renderedItem)}
        </div>
    )
}