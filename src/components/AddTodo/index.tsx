import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import styles from './styles'
interface addTodoProps { addTodo: any }
const useStyles = createUseStyles(styles)
const AddTodo = ({ addTodo }: addTodoProps) => {
    const [value, setValue] = useState<string>("");
    const classes = useStyles()
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value)
        setValue("");
    };
    return (
        <div className={classes.main}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={value}
                    placeholder="Add to do..."
                    onChange={(e) => setValue(e.target.value)}
                    className={classes.input}
                />
            </form>
        </div>
    )
}

export default AddTodo