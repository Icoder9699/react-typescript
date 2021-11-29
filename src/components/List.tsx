import React from 'react'

// generics
interface ListProps<T>{
    items: T[];
    renderItems: (item: T) => React.ReactNode;
}

export default function List<T>(props: ListProps<T>){
    return(
        <div>
            {
                props.items.map(props.renderItems)
            }
        </div>
    )
}