import React from 'react'
import {View, FlatList} from 'react-native'
import { CardTask } from '../CardTask'
import {AddTask} from '../AddTask'
import {connect} from 'react-redux'
import { getTasks } from '../../redux/selectors'

function Container(props){
    return(
        <View>
            <AddTask></AddTask>
            <FlatList
                data={props.tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) =>
                    <CardTask item={item}/>
                }
            />
        </View>
    )
}


export default connect(state => ({tasks: getTasks(state)}))(Container);