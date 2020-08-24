import React, {useState} from 'react'
import {View, TextInput} from 'react-native'
import { Button } from '../Button'
import styles from './styles'
import {addTask} from '../../redux/actions'
import {connect} from 'react-redux'

function AddTask(props){
    const [inputTask, setInputTask] = useState("");

    return(
        <View style={styles.containerAdd}>
            <TextInput 
                style={styles.inputAdd}
                onChangeText={text => {
                    setInputTask({text})
                }}
                value={inputTask}
            />    
            <Button onClick={event => {
                console.log(inputTask.text)
                props.addTask(inputTask.text)
                setInputTask("")
            }} 
            name={"Add"}></Button>
        </View>
    )
}

export default connect(null, {addTask})(AddTask);