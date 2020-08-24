import React from 'react'
import {View, Text} from 'react-native';
import {Button} from '../Button'
import styles from './styles'

function CardTask({item}){
    return(
        <View style={styles.card}>
            <View 
                style={[styles.statusTask, item.completed ? {backgroundColor:"#00695C"}: {backgroundColor:"#fff176"}]}>
                <Text/>
            </View>
            <Text style={styles.textCard}>{item.task}</Text>
            <View style={styles.footerCard}>
                <Button item={item} variant={"delete"} color={"#B71C1C"} name={"Apagar"}></Button>
                <Button item={item} variant={"finish"} color={"#00695C"} name={"Concluir"}></Button>
                {/* <Button item={item} variant={"edit"} color={"#01579B"} name={"Editar"}></Button>    */} 
            </View>
        </View>
    )
}

export default CardTask;