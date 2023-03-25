import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import LoginScreen from "./views/screens/LoginScreen";
import COLORS from "./data/colors";


function ImagePickerExample(props:{onChangeHandler:(arg0:string)=>void}) {
    // The path of the picked image
    //@ts-ignore
    const [pickedImagePath, setPickedImagePath] = useState('');

    // This function is triggered when the "Select an image" button pressed
    const showImagePicker = async () => {
        // Ask the user for the permission to access the media library
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your photos!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync();

        // Explore the result
        console.log(result);
        // @ts-ignore
        props.onChangeHandler(result.assets[0].uri)
        if (!result.canceled) {
            // @ts-ignore
            props.onChangeHandler(result.assets[0].uri);
        }
    }

    return (
        <View style={styles.screen}>
            <View style={styles.buttonContainer}>
                <Button color={COLORS.primary} onPress={showImagePicker} title="Select an image"/>
            </View>
        </View>
    );
}

export default ImagePickerExample

// Kindacode.com
// Just some styles
const styles = StyleSheet.create({
    screen: {
        marginBottom:10,
    },
    buttonContainer: {
        width: 200,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    imageContainer: {
        padding: 30
    },
    image: {
        width: 400,
        height: 300,
        resizeMode: 'cover'
    }
});