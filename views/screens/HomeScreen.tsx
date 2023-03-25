import React, {useContext, useState} from "react";
import {SafeAreaView, StyleSheet, Text, View, Image, Touchable, Dimensions, AppState} from 'react-native';
import productsContex from "../../productsContex";


const HomeScreen= ({navigation}) =>{
    const [products,setProducts]=useState([{amount:10,desc:"Testni proizvoid"},{amount:20,desc:"Testni proizvoid"}])
    // @ts-ignore
    return (
        <View>
        </View>
    );



};


export default HomeScreen;