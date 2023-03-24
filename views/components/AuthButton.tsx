import {StyleSheet, Text, TouchableOpacity} from "react-native";
import Colors from "../../colors/Colors";

//@ts-ignore
export default function AuthButton(props) {

    return <TouchableOpacity onPress={props.onPressBtn} style={styles.button}>
        <Text style={styles.button_text}>{props.title}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        marginTop: 60,
        //btn color
        backgroundColor: Colors.PURPUR,
        width: 250,
        height: 50,
        borderStyle: "solid",
        borderColor: Colors.PURPUR,
        borderWidth: 2,
        borderRadius: 20,
    },
    button_text: {
        top: 5,
        alignSelf: "center",
        fontSize: 24,
        color: "white"
    }
});
