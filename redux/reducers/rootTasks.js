import { ADD_TASK, DEL_TASK, UPDATE_TASK } from "../actionsTypes"

const initialState = {
    allIds: [],
    byIds: {}
}
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TASK: {
            const { id, task } = action.payload
            return {
                ...state, allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds, [id]: {
                        task,
                        completed: false
                    }
                }
            };
        }
        case DEL_TASK: {
            const { indexTable, id } = action.payload;
            let newAllIds = [...state.allIds]
            let newbyIds = { ...state.byIds }

            newAllIds.splice(indexTable, 1)
            delete newbyIds[id.toString()]
            return {
                ...state, allIds: newAllIds,
                byIds: newbyIds
            }

        }
        case UPDATE_TASK: {
            const { indexTable, id, task } = action.payload
            let newbyIds = {...state.byIds}
            console.log(newbyIds)
            newbyIds[id.toString()] = task
            /* console.log(indexTable)
            console.log(id)
            console.log(task)
            console.log(newbyIds) */
            return {
                ...state, allIds: state.allIds,
                byIds: newbyIds
            }
        }
        default:
            return state;
    }
}
