import React from 'react'

interface AddTodoProps{
    addTodo: (title: string) => void
}

const AddTodo = ({addTodo}: AddTodoProps) => {
    const [val, setVal] = React.useState<string>("")
    
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVal(e.target.value)
    }

    const addTodoHandler = (event: React.KeyboardEvent<HTMLFormElement>) => {
        event.preventDefault()
        addTodo(val)
        setVal("")
    }

    return(
        <form onSubmit={addTodoHandler} >
            <input 
                style={{width: "70%", padding: 10, margin: 10}}
                type="text"
                placeholder="write there todo..."
                value={val}
                onChange={e => onChangeHandler(e)}
            />
            <button style={{width:"20%", padding: 10}}>Add</button>
        </form>
    )
}

export default AddTodo