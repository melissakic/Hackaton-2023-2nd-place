import {Image, StyleSheet, View} from "react-native";
import COLORS from "../../data/colors";
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
        width: 155,
        height: 155,
        marginBottom: 70,
        borderRadius: 20,
        backgroundColor: COLORS.secondary,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
