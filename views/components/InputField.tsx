import {Alert, StyleSheet, TextInput, View} from "react-native";
import COLORS from  "../../data/colors";


function validateEmail(email: string) {
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return expression.test(email);
}

function validatePassword(password: string) {
    if (password.length < 8) return false;
    else return true;
}


//@ts-ignore
export default function InputField(props) {
    const onChangeHandler = (text: string) => {
        const validation: boolean = props.secure ? validatePassword(text) : validateEmail(text);
        if (validation && text != "") {
            props.setValidP(true)
            props.setValue(text);
        } else {
            props.setValidP(false)
        }
    }
    return <View style={props.validP ? styles.input : styles.input_invalid}>
        <TextInput placeholder={props.placeholder} style={{fontSize: 22, padding: 12, marginLeft: 10}}
                   secureTextEntry={props.secure} onChangeText={onChangeHandler}></TextInput>
    </View>
}


const styles = StyleSheet.create({
    input: {
        margin: 10,
        backgroundColor: COLORS.secondary,
        borderRadius: 40,
        alignSelf: "stretch",
        marginHorizontal: 20,
        height: 60,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 8,
    },
    input_invalid: {
        margin: 10,
        borderRadius: 40,
        backgroundColor: COLORS.secondary,
        alignSelf: "stretch",
        marginHorizontal: 20,
        height: 60,
        borderColor: COLORS.grey,
        borderStyle: "solid",
        borderWidth: 3,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 15,
    }
});
