import { combineReducers } from 'redux';

// Employees
import EmployeeReducer from './EmployeeReducer';

// Combine Reducers
const RootReducer = combineReducers({
  // Employees
  employee: EmployeeReducer,
})

export default RootReducer;