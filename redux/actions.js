import { ADD_TASK, DATA_TABLE, DEL_TASK, UPDATE_TASK } from './actionsTypes'

let nextTodoId = 0;
export const addTask = task => ({
    type: ADD_TASK,
    payload: {
        id: ++nextTodoId,
        task
    }
});

export const addAllTable = (tasksTable) => ({

    type: DATA_TABLE,
    payload: {
        tasksTable
    }
}
)

export const delTask = (indexTable, id) => ({
    type: DEL_TASK,
    payload: {
        indexTable, 
        id
    }
})

export const updateTask = (indexTable, id, task) => ({
    type: UPDATE_TASK,
    payload: {
        indexTable,
        id,
        task
    }
})