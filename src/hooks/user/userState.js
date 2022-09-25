import React, { useReducer } from 'react';
import { ToDoListContext } from './toDoListContext';
import { toDoListReducer } from './userReducer';
import { ADD_TO_DO, SET_TO_DO, DELETE_TO_DO, UPDATE_TO_DO } from '../types';

export const ToDoState = ({ children }) => {
    const initialState = {
        todos: [],
    };
    const [state, dispatch] = useReducer(toDoListReducer, initialState);
    const tokenEnt = localStorage.getItem('token');

    const addToDos = ({ todos, inputValue }) => {
        const newToDos = [...state.todos];

        const token = localStorage.getItem('token');

        fetch('http://localhost:3000/api/dashboard/todo', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                task: inputValue,
                isCompleted: false,
            }),
        })
            .then((res) => {
                return res.json();
            })
            .then((resData) => {
                newToDos.unshift(resData.todo);
                dispatch({ type: ADD_TO_DO, payload: { todos: newToDos } });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const setToDos = (todos) => {
        const graphqlQuery = {
            query: `
        {
          todo{
            task
            isCompleted
            _id
          }
        }
      `,
        };
        fetch('http://localhost:3000/graphql', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + tokenEnt,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(graphqlQuery),
        })
            .then((res) => {
                return res.json();
            })
            .then((resData) => {
                // console.log(resData);
                if (resData.errors) {
                    throw new Error('Getting status failed!');
                }
                console.log(resData);
                // setToDos({ todos: resData.data.todo });
                dispatch({
                    type: SET_TO_DO,
                    payload: { todos: resData.data.todo },
                });
                console.log(todos);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const deleteToDos = ({ todoDelete, index }) => {
        fetch(`http://localhost:3000/api/dashboard/todo/${todoDelete._id}`, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + tokenEnt,
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                return res.json();
            })

            .catch((err) => {
                console.log(err);
            });
        dispatch({
            type: DELETE_TO_DO,
            payload: { todoDeleteId: todoDelete._id, index },
        });
    };

    const updateToDos = ({ todos, id, event }) => {
        let todoClean = state.todos;
        let todo = state.todos[id];
        const tokenSet = localStorage.getItem('token');
        todoClean[id].isCompleted = !todoClean[id].isCompleted;
        fetch(`http://localhost:3000/api/dashboard/todo/${todos[id]._id}`, {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + tokenSet,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                isCompleted: event.target.checked,
                task: todo.task,
            }),
        }).catch((err) => {
            console.log(err);
        });
        dispatch({ type: UPDATE_TO_DO, payload: { todos: todoClean } });
    };

    return (
        <ToDoListContext.Provider
            value={{
                addToDos,
                setToDos,
                deleteToDos,
                updateToDos,
                todos: state.todos,
            }}
        >
            {children}
        </ToDoListContext.Provider>
    );
};
