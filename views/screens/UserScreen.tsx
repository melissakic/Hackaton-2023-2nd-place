import {Alert, Button, Image, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import firebase from "firebase/compat";
import {auth} from "../../firebaseConfig";
import React, {useEffect, useState} from "react";
import {DataBaseManager} from "../../managers/DataBaseManager";
import {ScrollView, TouchableHighlight} from "react-native-gesture-handler";
import ImagePicker from "../../ImagePicker";
import * as path from "path";
import {user} from "../../managers/AuthManager";
import Modal from "react-native-modal";
import COLORS from "../../data/colors";






function UserScreen(navigation){
    const [desc,setDesc]=useState('')
    const [amount,setAmount]=useState('')
    const [products,setProducts]=useState([])
    const [image,setImage]=useState('')
    const [clickedAmount,setClickedAmount]=useState('')
    const test=1;

   function loadProducts(){
       setProducts([])
       // @ts-ignore
       DataBaseManager.readFromDatabase(setProducts)
   }

    function descHandler(text:string){
        setDesc(text)
    }


    function amountHandler(text:string){
        setAmount(text)
    }

    function addHandler(){
       //@ts-ignore
        setProducts(prevState => {
            let test=image;
            return [...prevState,{imagePath:test,productAmount:amount,description: "Test"}]
        })
      DataBaseManager.addInDatabase(image,desc,amount)
    }

    function updateImageHandler(path:string){
        setImage(path)
    }

    function deleteHandler(amount:string){
        DataBaseManager.deleteFromData(amount)

    }

    function editHandler(){

    }



    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    return <View>
        <Text style={styles.title}>Sell your products, {auth.currentUser?.email}</Text>
        <TextInput placeholder={"Product description"} style={styles.input} onChangeText={descHandler}></TextInput>
        <TextInput placeholder={"Product price"} style={styles.input} onChangeText={amountHandler}></TextInput>
        <View style={{alignSelf:"center"}}>
            <ImagePicker onChangeHandler={updateImageHandler}></ImagePicker>
        </View>
        <View style={{marginBottom:10}}>
            <Button title={"Reload products"} onPress={loadProducts}></Button>
        </View>
        <View style={styles.buttonCustom}>
            <Button title={"Add"} onPress={addHandler}></Button>
        </View>
        <ScrollView style={{alignSelf:"center",marginTop:20,height:"50%"}}>
            {products.map(data=>{
                return <View style={styles.cardUser}>
                    <Text>{`$${data.productAmount}`}</Text>
                    <Text>{data.description}</Text>
                    {image==""?<Image source={{uri:"file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FwebShop-a4261b57-859e-42a5-9171-825d29213769/ImagePicker/aa" +
                            "1f1283-0215-4684-948a-31bd85bc5be7.jpeg"}} style={{width:200,height:200}}></Image>:<Image source={{uri:image}} style={{width:200,height:200}}></Image>}
                    <View style={{marginVertical:10}}>
                        <Button title={"Delete"} onPress={deleteHandler.bind(amount,data.productAmount)}></Button>
                    </View>
                    <Button title={"Edit"} onPress={handleModal} />
                    <Modal isVisible={isModalVisible}  backdropColor={COLORS.white}
                           backdropOpacity= {1} >
                        <View style={{ flex: 1 }}>
                            <Button title="Hide modal" onPress={handleModal} />
                        </View>
                        <View style={styles.modal}>
                            <Text style={styles.text}>
                               Edit your article
                            </Text>
                            <View>
                                <Text style={styles.opis }>Add product description</Text>
                                <TextInput placeholder={"Product description"} style={styles.input1} onChangeText={descHandler}></TextInput>
                                <Text style={styles.opis }>Add product price</Text>
                                <TextInput placeholder={"Product price"} style={styles.input1} onChangeText={amountHandler}></TextInput>
                            </View>
                        </View>
                    </Modal>


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
        fontWeight:"bold",

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
        borderStyle:"solid",
        textAlign: "center"
    },
    modal: {
        width: "100%",
        height: "70%",
        alignItems: "center",
    },
    text: {
        fontSize: 28,
        fontWeight: "500",
        elevation:20,
        shadowOpacity:50,
        textAlign: "center",
        backgroundColor: COLORS.secondary,
        shadowColor:"COLORS.dark",
    },
    opis:{
        fontSize:20,
        alignSelf:"center",
        marginTop:35,
        width:"40%",


    },
    input1:{
        fontSize:16,
        height:75,
        width:230,
        marginVertical:20,
        marginHorizontal:20,
        alignSelf:"stretch",
        borderWidth:2,
        borderRadius:20,
        borderColor:"black",
        borderStyle:"solid",
        textAlign:"center"
    },
})

export default UserScreen;