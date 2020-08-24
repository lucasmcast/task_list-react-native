export const getTasksState = store => store.rootTasks;

export const getTasksList = store =>
    getTasksState(store) ? getTasksState(store).allIds : [];

export const getTaskById = (store, id) =>
    getTasksState(store) ? {...getTasksState(store).byIds[id], id} : {};

export const getTasks = store =>
    getTasksList(store).map(id => getTaskById(store, id))
