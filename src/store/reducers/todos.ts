
import {
    ADD_TODO,
    EDIT_TODO,
    DELETE_TODO,
    GET_TODOS,
    COMPLETE_TODO,
    UNCOMPLETE_TODO
} from '../../constants/ActionTypes'

const initialState: any[] = [

]
export interface ActionInterface {
    type: string;
    payload: any;
}

export default function todos(state = initialState, action: ActionInterface) {
    const { type, payload } = action
    switch (type) {
        case ADD_TODO:
            return [
                ...state,
                payload
            ]
        case GET_TODOS:
            return payload
        case DELETE_TODO:
            return state.filter(e => (e.id !== payload.id))
        case EDIT_TODO:
            return state.map(e => {
                if (e.id === payload.id) {
                    return { ...payload }
                }
                return e
            })
        case COMPLETE_TODO:
            return state.map(e => {
                if (e.id === payload.id) {
                    return { ...e, completed: true }
                }
                return e
            })
        case UNCOMPLETE_TODO:
            return state.map(e => {
                if (e.id === payload.id) {
                    return { ...e, completed: false }
                }
                return e
            })

        default:
            return state
    }
}
