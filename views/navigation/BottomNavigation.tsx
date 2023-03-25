import 'react-native-gesture-handler';
import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../data/colors';
import {View} from "react-native";
import CartScreen from '../screens/CartScreen'
import AddProductScreen from "../screens/AddProductScreen";
import UserScreen from "../screens/UserScreen";


const Tab= createBottomTabNavigator();

const BottomNavigator =()=>{
    //prvi screen koji zelis je HomeScreen, i dodas ga kao 'component'
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    height:60,
                    borderTopWidth:0, //da bude na dnu poravnato
                    elevation:0, //nema sjene

                },
                headerShown: false,
                tabBarShowLabel :false,
                tabBarActiveTintColor : COLORS.primary, //da se aktivira boja na aktivnom
            }}>

            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon:({color})=>(
                        <Icon name="home-filled" color={color} size={28}/>   //uzima f-iju
                        //ovo nam daje homesccren  plavi donji

                    )
                }}/>


            <Tab.Screen
                name="LocalMall"
                component={HomeScreen}
                options={{
                    tabBarIcon:({color})=>(
                        <Icon name="local-mall" color={color} size={28}/>
                    )
                }}/>


            {/*<Tab.Screen*/}
            {/*    //u sredini onaj*/}
            {/*    name="Search"*/}
            {/*    component={AddProductScreen}*/}
            {/*    options={{*/}
            {/*        tabBarIcon:({color})=>(*/}
            {/*            <View style={{height:60,*/}
            {/*                width:60,*/}
            {/*                justifyContent: "center",*/}
            {/*                alignItems: 'center',*/}
            {/*                backgroundColor:COLORS.white,*/}
            {/*                borderColor:COLORS.primary,*/}
            {/*                borderWidth:2,*/}
            {/*                borderRadius:30,*/}
            {/*                top: -24, //da izdigne*/}
            {/*                elevation: 5, //sjena*/}
            {/*            }}>*/}
            {/*                <Icon name={"add"} color={COLORS.primary} size={28}/>*/}
            {/*            </View>*/}

            {/*        )*/}
            {/*    }}/>*/}

            <Tab.Screen
                name="Favorite"
                component={UserScreen}
                options={{
                    tabBarIcon:({color})=>(
                        <Icon name="favorite" color={color} size={28}/>
                    )
                }}/>

            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarIcon:({color})=>(
                        <Icon name="shopping-cart" color={color} size={28}/>
                    )
                }}/>



        </Tab.Navigator>
    );

};

export default BottomNavigator;
