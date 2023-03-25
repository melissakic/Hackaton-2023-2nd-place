import {StyleSheet, Text, TouchableOpacity} from "react-native";
import COLORS from  "../../data/colors";

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
        backgroundColor: COLORS.primary,
        width: 250,
        height: 50,
        borderStyle: "solid",
        borderColor: COLORS.dark,
        elevation: 5,
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
