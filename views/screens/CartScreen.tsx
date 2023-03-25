import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../data/colors';
import foods from '../../data/clothes';
import {FirstButton} from '../components/Button';
import {DataBaseManager} from "../../managers/DataBaseManager";

const CartScreen=({navigation}) => {
    const [cart,setCart]=useState([])
    const [price,setPrice]=useState(0)
    const [reload,setReaload]=useState(false)

    useEffect(()=>{
        // @ts-ignore
        DataBaseManager.readFromDatabaseCart(setCart,setPrice)
        return ()=>{

        }
    },[reload])

    //lista artikala
    const CartCard=({item})=>{
        return( <View style={style.cartCard}>
                <Image source={item.image} style={{height:80, width:80}}/>
                <View
                    style={{
                        height: 100,
                        marginLeft: 10,
                        paddingVertical: 20,
                        flex: 1,
                    }}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>
                        {item.name}
                    </Text>
                    <Text style={{fontSize: 13, color: COLORS.grey}}>
                        {item.ingredients}
                    </Text>
                    <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                        ${item.price}
                    </Text>
                </View>


            </View>
        );
    };

    return ( //back to cart
        <SafeAreaView style={{backgroundColor:COLORS.white, flex:1}}>
            <View style={style.header}>

                <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack}/>
                <Text style={{fontSize:20, fontWeight:'bold'}}>
                    Cart

                </Text>
            </View>
            <FlatList showsVerticalScrollIndicator={false}
                      contentContainerStyle={{paddingBottom:80}}
                      data={cart}
                      renderItem={({item})=><View style={{flexDirection:"row",alignSelf:"center"}}>
                          <Text style={{marginHorizontal:10}}>{item.name}</Text>
                          <Text>{item.amount}</Text>
                      </View>}
                      ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
                      ListFooterComponent={()=>(
                          <View>
                              <View style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  marginVertical:15,


                              }}>
                                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                                      Total Price
                                  </Text>
                                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                                      {`$${price.toFixed(2)}`}
                                  </Text>
                              </View>
                              <View style={{marginVertical: 40}}>
                                  <FirstButton title="CHECKOUT" onPress={()=>{
                                    setCart([])
                                      setPrice(0)
                                      DataBaseManager.deleteAll()
                                     if(reload){setReaload(false)}
                                     else {setReaload(true)}
                                      navigation.goBack()
                                  }
                                  }/>
                              </View>
                                  <FirstButton title="Back" onPress={()=>{
                                      setCart([])
                                      setPrice(0)

                                      if(reload){setReaload(false)}
                                      else {setReaload(true)}
                                      navigation.goBack()
                                  }
                                  }/>

                          </View>
                      )}
            />

        </SafeAreaView>

    );
};

const style = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    cartCard: {
        height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionBtn: {
        width: 80,
        height: 30,
        backgroundColor: COLORS.primary,
        borderRadius: 30,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
});





export default CartScreen;