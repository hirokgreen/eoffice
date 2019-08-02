import { ActionList } from 'Redux/Constants/ActionList';


// Initial State
const initState = {
    data: [
        {
            "id": 1,
            "name": "Sakib",
            "age": 28
        },
        {
            "id": 2,
            "name": "Liton",
            "age": 27
        },
        {
            "id": 3,
            "name": "Soikot",
            "age": 25
        },
        {
            "id": 4,
            "name": "Fizz",
            "age": 21
        },
        {
            "id": 5,
            "name": "Hasan",
            "age": 29
        }
    ]
}

// Reducer
const EmployeeReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionList.EmployeeList:
            return action
        case ActionList.AddEmployee:
            return action
        case ActionList.DeleteEmployee:
            return action
        default:
            return state
    }
}

export default EmployeeReducer;