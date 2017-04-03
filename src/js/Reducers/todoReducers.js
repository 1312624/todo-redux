import { ADD_TODO, DELETE_TODO, EDIT_TODO } from '../Constants/TodoTypes';

const initialState = [
    {
        id: 0,
        text: 'Simple Todo'
    }
];

export default function Todo(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: state.length === 0 ? 0 : state[state.length - 1].id + 1,
                    text: action.text
                }
            ];

        case DELETE_TODO:
            return state.filter(item => item.id !== action.id);

        case EDIT_TODO:
            return state.map(item =>
                item.id === action.id ? { ...item, text: action.text } : item
            );

        default:
            return state;
    }
}