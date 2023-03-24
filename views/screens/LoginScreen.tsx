import {useState} from "react";
import {ActivityIndicator, Alert, Image, StyleSheet, View} from "react-native";
import InputField from "../components/InputField";
import AuthButton from "../components/AuthButton";
import Colors from "../../colors/Colors";
import LoginImage from "../components/LoginImage";
import {AuthManager} from "../../managers/AuthManager";


export default function LoginScreen() {
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    function onPressHandler() {
        setLoading(true)
        let message: string = validEmail ? 'Please input correct password(Minimum 8 characters long)' : 'Please input correct email(x@x.co)'
        if (validEmail && validPassword) {
            AuthManager.logUser(email, password, () => {
                console.log("prijavljen")
                setLoading(false)
            })
        } else {
            setLoading(false)
            Alert.alert("Input error", message);
        }
    }


    return (
        <View style={styles.container}>
            <LoginImage></LoginImage>
            <InputField setValue={setEmail} setValidP={setValidEmail} validP={validEmail}
                        placeholder={"Enter email"}></InputField>
            <InputField setValue={setPassword} setValidP={setValidPassword} validP={validPassword}
                        placeholder={"Enter password"}
                        secure={true}></InputField>
            {loading &&
                <ActivityIndicator size="large" color={Colors.PURPUR} style={{marginTop: 40}}></ActivityIndicator>}
            <AuthButton onPressBtn={onPressHandler} title={"Login"}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.CREAM,
        alignItems: 'center',
        justifyContent: 'center',
    },
});