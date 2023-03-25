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
                        flex:1,
                        top:110, //da slika bude u sredini
                    }}
                    source={require("../../categories/pozadina.png")}
                />

            </View>

            <View style={style.textContainer}>
                <View >
                    <Text style={{fontSize:32,fontWeight:"bold", paddingTop:30 ,textAlign:'center',fontStyle:"italic" }}>
                        {"<MIteam/> shop"}
                    </Text>
                    <Text style={{marginTop:20,
                        marginBottom:20,
                        fontSize:18,
                        textAlign:'center', color: COLORS.grey}}>
                       Find best outlet items
                        {"\n"}
                        Shop what you love—faster and easier</Text>
                </View>



                <FirstButton
                    onPress={()=>navigation.navigate('Login')}
                    title="Login"
                />
                <FirstButton
                    onPress={()=>navigation.navigate('Sign')}
                    title="Create account"
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
        paddingBottom: 100,
        marginTop:20
    },
    indicatorContainer:{
        height:40,
        flex:1,
        justifyContent:"center",
        flexDirection:"row",  //s lijeva na desno
        alignItems: 'center'
    },
});

export default OnBoardScreen;