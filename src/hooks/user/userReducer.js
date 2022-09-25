import { ADD_TO_DO, SET_TO_DO, DELETE_TO_DO, UPDATE_TO_DO } from '../types';

export const toDoListReducer = (currentTodo, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            return {
                todos: action.payload.todos,
            };

        case SET_TO_DO:
            return action.payload;
        case UPDATE_TO_DO:
            return { todos: action.payload.todos };
        case DELETE_TO_DO:
            let todoClean = currentTodo.todos;
            todoClean.splice(action.payload.index, 1);
            return { todos: todoClean };
        default:
            throw new Error('Should not get there!');
    }
};
