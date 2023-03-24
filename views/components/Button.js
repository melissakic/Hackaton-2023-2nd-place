import React from "react";
import {StyleSheet, TouchableOpacity, View,Text} from "react-native";
import COLORS from "../../data/colors";

const FirstButton =({title,onPress=()=>{}})=>{

    //ovo {onPress} je uzeta funkcija koju si proslijedila gore
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={style.btnContainer}>
                <Text style={style.title} > {title}</Text>

            </View>

        </TouchableOpacity>
    );
};


const style=StyleSheet.create({

    //izgled dugmeta
    btnContainer: {
        backgroundColor: COLORS.primary,
        height:60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        color:COLORS.white,
        fontWeight:'bold',
        fontSize: 18
    }
});

export {FirstButton};