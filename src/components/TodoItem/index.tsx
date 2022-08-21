import React, { FormEvent, useState } from 'react'
import { createUseStyles } from 'react-jss'
import classnames from 'classnames'
import styles from './styles'
import EllipsisSVG from '../../assets/icons/EllipsisSVG'
const useStyles = createUseStyles(styles)
const TodoItem = ({ todo, index, completeToggle, editTodo, removeTodo }: any) => {
    const [visibility, setVisibility] = useState(false)
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [value, setValue] = useState(todo.title)
    const classes = useStyles()
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        editTodo(todo.id, value);
        setIsEditing(false);
    };

    const handleClick = () => {
        setVisibility(!visibility);
    };


    if (isEditing) {
        return (
            <div className={classnames(classes.main)} style={{ padding: "6px 6px 6px 15px" }}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        style={styles.input}
                    />
                </form>
                <button type="submit" onClick={handleSubmit} style={styles.saveButton}>
                    Save
                </button>
            </div>
        )
    }

    return (
        <div className={classes.main}>
            <label className={classes.container}>
                <input
                    type="checkbox"
                    onChange={() => completeToggle(index)}
                    checked={todo.completed}
                />
                <span className={classnames(classes.completed, { [classes.checked]: todo.completed })} />
            </label>
            <span className={classnames({[classes.typographyChecked]:todo.completed})}>
                {todo.title}
            </span>
            <span
                onClick={handleClick}
                style={{ marginLeft: "auto" }}
                className={classes.dropdown}
            >
                <EllipsisSVG />
                <div
                    className={classes.dropdownContent}
                    style={{ display: visibility ? "" : "none" }}
                >
                    <div style={{ color: "#2E2E2E" }} onClick={() => setIsEditing(true)}>Edit</div>
                    <div style={{ color: "#E07C7C" }} onClick={() => removeTodo(todo.id)}>Delete</div>
                </div>
            </span>
        </div>
    )
}
export default TodoItem