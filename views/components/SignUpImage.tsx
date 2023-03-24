import {Image, StyleSheet, View} from "react-native";
import Colors from "../../colors/Colors";
import React from "react";

//@ts-ignore
function SignUpImage(props) {
    return <View>
        <Image style={styles.image} source={require("./../../assets/add.png")}></Image>
    </View>
}

export default SignUpImage;

const styles = StyleSheet.create({
    image: {
        tintColor: Colors.PURPUR,
        width: 150,
        height: 150,
        marginBottom: 70
    }
});
