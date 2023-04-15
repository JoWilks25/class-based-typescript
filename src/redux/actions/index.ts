import * as types from '../constants/ActionTypes'

interface actionType {
  type: string;
  text?: string;
  id?: number;
  filter?: string;
}

export const addTodo = (text: string): actionType => ({ type: types.ADD_TODO, text })
export const deleteTodo = (id: number): actionType => ({ type: types.DELETE_TODO, id })
export const editTodo = (id: number, text: string): actionType => ({ type: types.EDIT_TODO, id, text })
export const completeTodo = (id: number): actionType => ({ type: types.COMPLETE_TODO, id })
export const completeAllTodos = (): actionType => ({ type: types.COMPLETE_ALL_TODOS })
export const clearCompleted = (): actionType => ({ type: types.CLEAR_COMPLETED })
export const setVisibilityFilter = (filter: string): actionType => ({ type: types.SET_VISIBILITY_FILTER, filter })
