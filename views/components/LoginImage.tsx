import {Image, StyleSheet, View} from "react-native";
import Colors from "../../colors/Colors";
import React from "react";

//@ts-ignore
function LoginImage(props) {
    return <View>
        <Image style={styles.image} source={require("./../../assets/user.png")}></Image>
    </View>
}

export default LoginImage;

const styles = StyleSheet.create({
    image: {
        tintColor: Colors.PURPUR,
        width: 150,
        height: 150,
        marginBottom: 70
    }
});
