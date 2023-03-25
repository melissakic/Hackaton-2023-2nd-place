import {Alert, Button, Image, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import firebase from "firebase/compat";
import {auth} from "../../firebaseConfig";
import Colors from "../../colors/Colors";
import React, {useState} from "react";
import {DataBaseManager} from "../../managers/DataBaseManager";
import {ScrollView, TouchableHighlight} from "react-native-gesture-handler";
import ImagePicker from "../../ImagePicker";
import * as path from "path";


function UserScreen(){
    const [desc,setDesc]=useState('')
    const [amount,setAmount]=useState('')
    const [products,setProducts]=useState([])
    const [image,setImage]=useState('')

    function descHandler(text:string){
        setDesc(text)
    }


    function amountHandler(text:string){
        setAmount(text)
    }

    function addHandler(){
        // @ts-ignore
        setProducts(prevState => {
            let test=image;
            return [...prevState,{ imagePath:test,productAmount:amount,description: "Test"}]
        })
      DataBaseManager.addInDatabase(image,desc,amount)
    }

    function updateImageHandler(path:string){
        console.log("Evo")
        console.log(path)
        setImage(path)
    }

    function deleteHandler(){

    }

    function editHandler(){

    }

    return <View>
        <Text style={styles.title}>Sell your products, {auth.currentUser?.email}</Text>
        <TextInput placeholder={"Product description"} style={styles.input} onChangeText={descHandler}></TextInput>
        <TextInput placeholder={"Product price"} style={styles.input} onChangeText={amountHandler}></TextInput>
        <View style={{alignSelf:"center"}}>
            <ImagePicker onChangeHandler={updateImageHandler}></ImagePicker>
        </View>
        <View style={styles.buttonCustom}>
            <Button title={"Add"} onPress={addHandler}></Button>
        </View>
        <ScrollView style={{alignSelf:"center",marginTop:20,height:"60%"}}>
            {products.map(data=>{
                return <View style={styles.cardUser}>
                    <Text>{`$${data.productAmount}`}</Text>
                    <Text>{data.description}</Text>
                    {image==""?<Image source={{uri:"file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FwebShop-a4261b57-859e-42a5-9171-825d29213769/ImagePicker/aa" +
                            "1f1283-0215-4684-948a-31bd85bc5be7.jpeg"}} style={{width:200,height:200}}></Image>:<Image source={{uri:image}} style={{width:200,height:200}}></Image>}
                    <View style={{marginVertical:10}}>
                        <Button title={"Delete"} onPress={deleteHandler}></Button>
                    </View>
                    <Button title={"Edit"} onPress={editHandler}></Button>
                </View>
            })}
        </ScrollView>
    </View>
}


const styles = StyleSheet.create({
    cardUser:{
        borderWidth:1,
        borderStyle:"solid",
        borderColor:"black",
        marginBottom:10,
    },
    buttonCustom:{
        width:"40%",
        alignSelf:"center"
    },
    title:{
        fontSize:25,
        alignSelf:"center",
        marginTop:20,
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
        height:80,
        marginVertical:10,
        marginHorizontal:20,
        alignSelf:"stretch",
        borderWidth:2,
        borderRadius:20,
        borderColor:"black",
        borderStyle:"solid"
    },
})

export default UserScreen;