import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

import * as ImagePicker from 'expo-image-picker';


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

        if (!result.canceled) {
            // @ts-ignore
            setPickedImagePath(result.assets[0].uri);
            props.onChangeHandler(result.assets[0].uri);
            console.log(result.assets[0]);
        }
    }

    const [imageArray,setImageArray] = useState([]);
    return (
        <View style={styles.screen}>
            <View style={styles.buttonContainer}>
                <Button onPress={showImagePicker} title="Select an image"/>
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
        justifyContent: 'space-around'
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