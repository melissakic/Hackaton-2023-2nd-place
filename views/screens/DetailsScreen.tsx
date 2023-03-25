import React, {useState} from "react";
import {Text,StyleSheet,Platform,StatusBar,View,Image} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context"; //i za androird i ios
import COLORS from  "../../data/colors";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from "react-native-gesture-handler";
import {SecondButton} from "../components/Button";
import {DataBaseManager} from "../../managers/DataBaseManager";
import ReviewForm from "../components/ReviewForm";

const DetailsScreen= ({navigation,route}) =>{
    //ovo cuva detalje iz "proslosti" zapamceno iz homescreena
    const item= route.params;


    return (

        <SafeAreaView style={{backgroundColor: COLORS.white }}>
            <View style={style.header} >
                <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
                <Text style={{fontSize:20, fontWeight: 'bold'}}> Details </Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 280,
                    }}>
                    <Image source={item.image} style={{height: 220, width: 220}} />
                </View>
                <View style={style.details}>
                    <View
                        style={{ //baloncic ispod slike
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <Text //ime za hranu
                            style={{fontSize: 25, fontWeight: 'bold', color: COLORS.white}}>
                            {item.name}
                        </Text>
                        <View style={style.iconCont}>
                            <Icon name="favorite-border" color={COLORS.primary} size={25} />
                        </View>
                    </View>


                    <Text style={style.detailsText}>
                        {item.description}
                    </Text>
                    <ReviewForm onReviewSubmit={()=>{}}/>
                    <View style={{marginTop: 40, marginBottom: 40}}>
                        <SecondButton  title="Add To Cart" onPress={()=>{
                             DataBaseManager.addInDatabaseCart(item.name,item.price)
                        }
                        }/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};



const style= StyleSheet.create({
    header: {
        paddingVertical:20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    details: {
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 60,
        backgroundColor: COLORS.primary,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    iconCont: {
        backgroundColor: COLORS.white,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    detailsText: {
        marginTop: 10,
        lineHeight: 22,
        fontSize: 16,
        color: COLORS.white,
    },

});

export default DetailsScreen;