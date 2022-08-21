import * as types from '../../constants/ActionTypes'
import Axios, { AxiosResponse } from 'axios'
import { Dispatch } from 'redux'

export const addTodo = (title: string) => (dispatch: Dispatch<any>) => {
    const id = Math.floor(Math.random() * 100000000);
    return Axios.post('http://localhost:3001/todos', { id, title, completed: false }).then(res => {
        return dispatch({ type: types.ADD_TODO, payload: { id, title, completed: false } })
    })

}
export const fetchTodos = () => (dispatch: Dispatch<any>) => {
    return Axios.get('http://localhost:3001/todos').then((res: AxiosResponse) => {
        return dispatch({ type: types.GET_TODOS, payload: res.data })
    })
}
export const editTodo = (id: string, todo: types.TodoInterface) => (dispatch: Dispatch<any>) => {
    const { title, completed } = todo
    return Axios.patch(`http://localhost:3001/todos/${id}`, {
        title,
        completed
    }).then((res: AxiosResponse) => {
        return dispatch({ type: types.EDIT_TODO, payload: res.data })
    })
}
export const removeTodo = (id: string) => (dispatch: Dispatch<any>) => {
    return Axios.delete(`http://localhost:3001/todos/${id}`).then((res: AxiosResponse) => {
        return dispatch({ type: types.DELETE_TODO, payload: { id } })
    })
}
