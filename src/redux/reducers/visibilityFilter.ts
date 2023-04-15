import { SET_VISIBILITY_FILTER } from '../constants/ActionTypes'
import { SHOW_ALL } from '../constants/TodoFilters'
import { actionInterface } from './reducerTypes';


const visibilityFilter = (state: string = SHOW_ALL, action: actionInterface) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter