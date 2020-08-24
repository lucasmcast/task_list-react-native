import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import styles from './styles';
import { connect } from 'react-redux'
import { getTasks } from '../../redux/selectors'
import { delTask, updateTask } from '../../redux/actions'

let handleClickButtonDelete = (taskModel, tasksArray, dispatch) => event => {
   let index = findIndexArray(taskModel.id, tasksArray)
   let id = taskModel.id
   dispatch(index, id)
    
}

let handleClickButtonFinish = (taskModel, tasksArray, dispatch) => event => {
   taskModel.completed = true
   let index = findIndexArray(taskModel.id, tasksArray)
   let id = taskModel.id
   dispatch(index, id, taskModel) 
}

let handleClickButtonEdit = (taskModel, tasksArray, dispatch) => event => {
    console.log("Editou")
}

const findIndexArray = (idTask, tasksArray) => {
    let index;

    for(let i = 0; i < tasksArray.length; i++){   
        let idTable = tasksArray[i].id
        if(idTask === idTable){
            index = i
        }
    }

    return index

}

function Button(props){
    //console.log(props)
    let onClick;
    let dispatch;
    
    if(props.variant === "delete"){
        onClick = handleClickButtonDelete
        dispatch = props.delTask
    }else if(props.variant === "finish"){
        onClick = handleClickButtonFinish
        dispatch = props.updateTask
    }else if(props.variant === "edit"){
        onClick = handleClickButtonEdit
        dispatch = props.delTask
    }
    return(
        <TouchableOpacity
            onPress={
                props.variant ? 
                onClick(props.item, props.tasks, dispatch) : 
                props.onClick } 
            style={[styles.buttonContainer,  props.color ? {backgroundColor: props.color}: {backgroundColor:"#006064"}]}>
            <Text style={styles.buttonText}>{props.name ? props.name : "Button"}</Text>
        </TouchableOpacity>
    )
}

export default connect(state => ({tasks: getTasks(state)}), { delTask, updateTask })(Button);