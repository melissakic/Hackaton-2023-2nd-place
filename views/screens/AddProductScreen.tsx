import React, {useState} from "react";
import {Alert, Button, Modal, Pressable, StyleSheet, Text, View, TextInput, Image} from "react-native"
import Colors from "../../colors/Colors";
import COLORS from "../../data/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import ImagePicker from "../../ImagePicker";

function  AddProductScreen({navigation}){
    return (<View style={styles.centeredView}>
            <ImagePicker></ImagePicker>
            <Image source={require("./../../assets/icon.png")} style={styles.image}></Image>
            <TextInput placeholder={"Product description"} style={styles.input}></TextInput>
            <TextInput placeholder={"Product price"} style={styles.input}></TextInput>
            <Pressable
                style={[styles.button, styles.buttonOpen]}>
                <Text style={styles.textStyle}>Sell clothes</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    image:{
        borderStyle:"solid",
        borderColor:"black",
        borderWidth:2,
        width:150,
        height:150
    },
    input:{
        fontSize:16,
        height:"8%",
        marginVertical:10,
        marginHorizontal:20,
        alignSelf:"stretch",
        borderWidth:2,
        borderRadius:20,
        borderColor:"black",
        borderStyle:"solid"
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        height:"10%",
        width:"50%",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: Colors.PURPUR,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        fontSize:25,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default AddProductScreen;