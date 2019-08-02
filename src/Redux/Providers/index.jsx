import {store} from '../../index';
import {addEmployee, deleteEmployee} from 'Redux/Actions/Employee'

const AddEmployeeHelper = ({name, age, employees}) => {
    const newItem = {name, age};
    newItem.id = Math.floor(Math.random() * 1000);
    newItem.age = parseInt(newItem.age);
    const data = [...employees, newItem]
    store.dispatch(addEmployee(data));
};

const DeleteEmployeeHelper = (id, employees) => {
    const data = employees.filter((employee, index) => employee.id !== id)
    store.dispatch(deleteEmployee(data));
}

export {AddEmployeeHelper, DeleteEmployeeHelper};
