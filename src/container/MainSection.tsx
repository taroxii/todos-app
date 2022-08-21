import React from 'react'
import AddTodo from '../components/AddTodo'
import TodoItem from '../components/TodoItem'
import { useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addTodo, editTodo, removeTodo } from '../store/actions'
import { AppDispatch } from '../store'

interface MainSectionInterface {
    addTodo: Function
    editTodo: Function
    removeTodo: Function
    onFilter: string
}

interface TodoItemInterfact {
    id: string
    title: string
    completed: boolean
}

const MainSection = ({ addTodo, editTodo, removeTodo, onFilter }: MainSectionInterface) => {
    const todos: Array<TodoItemInterfact> = useSelector((state: any) => state.todos)
    const _editTodo = (id: string, value: string) => {
        editTodo(id, { title: value })
    }

    const completeToggle = (index: number) => {
        editTodo(todos[index].id, { completed: !todos[index].completed })
    }

    const _removeTodo = (id: string) => {
        removeTodo(id)
    }

    return (
        <section>
            {todos.filter((todo) => {
                if (onFilter === "Done") return todo.completed;
                if (onFilter === "Undone") return !todo.completed;
                return todo;
            }).map((todo: TodoItemInterfact, index: number) => (
                <TodoItem
                    key={todo.id}
                    index={index}
                    todo={todo}
                    editTodo={_editTodo}
                    completeToggle={completeToggle}
                    removeTodo={_removeTodo}
                />
            ))}
            <AddTodo addTodo={addTodo} />
        </section>
    )
}
const mapDispatchToProps = (dispatch: AppDispatch) => bindActionCreators({ addTodo, editTodo, removeTodo }, dispatch)


export default connect(null, mapDispatchToProps)(MainSection)