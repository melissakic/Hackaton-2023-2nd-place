import {Image, StyleSheet, View} from "react-native";
import COLORS from  "../../data/colors";
import React from "react";

//@ts-ignore
function SignUpImage(props) {
    return <View>
        <Image style={styles.image} source={require("./../../assets/add1.png")}></Image>
    </View>
}

export default SignUpImage;

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
