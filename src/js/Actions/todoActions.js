import * as types from '../Constants/TodoTypes';

export function addTodo(text) {
    return {
        type : types.ADD_TODO,
        text
    };
}

export function deleteTodo(id) {
    return {
        type : types.DELETE_TODO,
        id
    }
}

export function editTodo(id, text) {
    return {
        type : types.EDIT_TODO,
        id,
        text
    }
}