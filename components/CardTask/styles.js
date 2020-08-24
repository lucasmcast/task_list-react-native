import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    statusTask:{
        width: 30,
        height:30,
        backgroundColor: "#00FF00",
        borderRadius: 30,
        position: "relative",
        top: 5,
        left: 5
    },
    footerCard:{
        flexDirection: "row",
        justifyContent: "space-around",
        borderTopWidth: 1,
        padding: 10
    },
    textCard:{
        textAlign: "center",
        fontSize: 40
    },
    card:{
        margin:10,
        borderRadius: 20,
        shadowColor: "#000",
        backgroundColor: "#FFFFFF", 
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.58,
        shadowRadius: 7.49,

        elevation: 24,
    }
    
})

export default styles