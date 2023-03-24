import React from "react";
import {Text,StyleSheet,View,Image} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context"; //i za nadroird i ios
import COLORS from  "../../data/colors";
import {FirstButton} from "../components/Button";
//@ts-ignore
const OnBoardScreen= ({navigation}) =>{
    return (

        //boja pozadine bijela
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
            <View style={{height:400}}>
                <Image
                    style={{width:"100%",
                        resizeMode: "contain",
                        top:-280, //da slika bude u sredini
                    }}
                    source={require("../../assets/icon.png")}
                />

            </View>

            <View style={style.textContainer}>
                <View >
                    <Text style={{fontSize:32,fontWeight:"bold", paddingTop:30 ,textAlign:'center'}}>
                        Shop
                    </Text>
                    <Text style={{marginTop:20,
                        fontSize:18,
                        textAlign:'center', color: COLORS.grey}}>
                        We help you to find best and delicious CLOTHES</Text>
                </View>

                <View style={style.indicatorContainer}>

                    <View style={style.currentIndicator}/>
                    <View style={style.indicator}/>
                    <View style={style.indicator}/>

                </View>

                <FirstButton
                    onPress={()=>navigation.navigate('Home')}
                    title="Get Started"
                />

            </View>


        </SafeAreaView>
    );


};

const style = StyleSheet.create({

    textContainer: {
        flex:1,
        paddingHorizontal:50, //koliko usko ce biti tekst(sirina)
        justifyContent:"space-between",
        paddingBottom: 50,
    },
    indicatorContainer:{
        height:40,
        flex:1,
        justifyContent:"center",
        flexDirection:"row",  //s lijeva na desno
        alignItems: 'center'
    },
    //prvi dugmic
    currentIndicator:{
        height:12,
        width:30,
        borderRadius:10,
        backgroundColor: COLORS.primary, //boja pozadine
        marginHorizontal: 5

    },
    indicator:{
        height:12,
        width:15,
        borderRadius:6,
        backgroundColor: COLORS.grey, //boja pozadine
        marginHorizontal: 5
    }
});

export default OnBoardScreen;