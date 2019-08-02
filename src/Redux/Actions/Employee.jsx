import { ActionList } from 'Redux/Constants/ActionList';

export const addEmployee = (data) => {
    return {
        type: ActionList.AddEmployee,
        data: data
    }
};

export const deleteEmployee = (data) => {
    return {
        type: ActionList.DeleteEmployee,
        data: data
    }
}