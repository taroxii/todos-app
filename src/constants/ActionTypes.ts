export const ADD_TODO: string = "ADD_TODO"
export const DELETE_TODO: string = "DELETE_TODO"
export const EDIT_TODO: string = "EDIT_TODO"
export const GET_TODOS: string = "GET_TODOS"
export const COMPLETE_TODO: string = "COMPLETE_TODO"
export const UNCOMPLETE_TODO: string = "UNCOMPLETE_TODO"
export interface TodoInterface {
    title: string
    completed: boolean
}