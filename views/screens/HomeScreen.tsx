

import React, {useState} from "react";
import {SafeAreaView, StyleSheet, Text, View, Image, Touchable, Dimensions, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../data/colors';
import {ScrollView, TextInput, TouchableOpacity,FlatList, TouchableHighlight} from "react-native-gesture-handler";
import categories from "../../data/categories"
import clothes from "../../data/clothes"
import {auth} from "../../firebaseConfig";



const {width}= Dimensions.get("screen"); //da bi dobila sirinu ekrana
const cardWidth= width/2-20; //na pola ekrana sa razmakom 20 piks


function ReactNativeFlatListInMemorySearch(props: { input: string, data: ({ image: any; price: string; name: string; ingredients: string; id: string } | { image: any; price: string; name: string; ingredients: string; id: string } | { image: any; price: string; name: string; ingredients: string; id: string } | { image: any; price: string; name: string; ingredients: string; id: string } | { image: any; price: string; name: string; ingredients: string; id: string } | { image: any; price: string; name: string; ingredients: string; id: string })[], setInput: (value: (((prevState: string) => string) | string)) => void }) {
    return null;
}

const HomeScreen= ({navigation})=>{



//da bi pratili koja je kategorija selektovana
    const [selectCategoryIndex,setSelectedCategoryIndex]= React.useState(0); //defaultni index=0
    const [products,setProducts]=React.useState([
        {
            category:"up",
            id: '1',
            name: 'Ženska košulja',
            ingredients: 'Mixed Pizza',
            price: '8.30',
            image: require('../../assets/kosulja.png'),
        },
        {
            category:"up",
            id: '2',
            name: 'Ženska jakna',
            ingredients: 'Cheese Pizza',
            price: '7.10',
            image: require('../../assets/jakna.png'),
        },
        {
            category:"down",
            id: '3',
            name: 'Patike',
            ingredients: 'Fried Chicken',
            price: '5.10',
            image: require('../../assets/patike.png'),
        },
        {
            category:"down",
            id: '4',
            name: 'Muške hlače',
            ingredients: 'Salmon Meat',
            price: '9.55',
            image: require('../../assets/hlace.png'),
        },
        {

            id: '5',
            category:"up",
            name: 'Muške hlače',
            ingredients: 'Salmon Meat',
            price: '9.55',
            image: require('../../assets/hlace.png'),
        },

        {
            id: '6',
            name: 'Shoes',
            ingredients: 'Salmon Meat',
            price: '9.55',
            image: require('../../assets/patike2.png'),
        },
    ]);

    //lista kategorija (slajd lijevo-des tj horizontalno)
    const ListCategories= () => {

        return (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}
                        contentContainerStyle={style.listCategoriesCont} >
                {categories.map((category,index)=>(
                    /*//posto boja pozadine nije nigdje postavljeno,hocu da se mijenja ovisno jel
                        //selktavano ili nije
                        //ako je kategorija odabrana dodat cemo primarnu boju(ako je index selektiran)
                        //ako nije uzet ce sekundarnu boju*/
                    //onpress dodas da izabere/postavi se inedex za specificnu kategoriju
                    //proslijedis index koji ce izabrati kategoriju (kad kliknes na kategoriju da je selektira)
                    <TouchableOpacity key={index} activeOpacity={0.8}
                                      onPress={()=> setSelectedCategoryIndex(index)}>
                        <View
                            style={{
                                backgroundColor: selectCategoryIndex==index ? COLORS.primary : COLORS.secondary,
                                ...style.categoryBtn}}>

                            <View style={style.categoryBtnImg}>
                                <Image source={category.image}
                                       style={{height:35,width:35,resizeMode:'cover'}}
                                />

                            </View>
                            <Text
                                //mijenjamo kategoriju u bijelo ako je selektirana,
                                //u suprotnom u primary color ako nije selektirana
                                style={{fontSize:15,fontWeight: 'bold',marginLeft:10,
                                    color:selectCategoryIndex== index ? COLORS.white : COLORS.primary
                                }}>
                                {category.name}
                            </Text>
                        </View>

                    </TouchableOpacity>
                ))}
            </ScrollView>
        );
    };
//ovo je izgled artikala
//{fooo} ono sto prosljedujes,sto se dolje koristi
    const Card =({clothes}) =>{
        return(
            <TouchableHighlight  underlayColor={COLORS.white}
                                 activeOpacity={0.9}
                                 onPress={()=> navigation.navigate('DetailsScreen',clothes)} //da bi dodavali hranu
            >
                <View style={style.card}>
                    <View style={{alignItems: 'center', top: -40}}>
                        <Image source={clothes.image} style={{height:120, width:120}}/>

                    </View>
                    <View style={{marginHorizontal:20}}>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>
                            {clothes.name}
                        </Text>
                        <Text style={{fontSize:14, color:COLORS.grey, marginTop:2}}>
                            {clothes.ingredients}
                        </Text>
                    </View>
                    <View style={{marginTop:10,
                        marginHorizontal:20,
                        flexDirection:"row",
                        justifyContent: 'space-between'}}>

                        <Text style={{fontSize:18,fontWeight:'bold'}}> ${clothes.price}</Text>
                    </View>

                </View>
            </TouchableHighlight> // da bi se moglo kliknut na artikal

            //ovo gore uzima id food-a
        );
    };


    const [search,setSearch]=useState('')

    function searchHandler(text:string){
        setSearch(text)
    }
    return (
        <SafeAreaView style={{flex:1,backgroundColor: COLORS.white}}>
            <View style={style.header}>
                <View>

                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:28}}> Hello,</Text>
                        <Text style={{fontSize:28, fontWeight:'bold', marginLeft:10}}>
                            {auth.currentUser?.email}
                        </Text>
                    </View>
                    <Text style={{marginTop: 5, fontSize:22, color:COLORS.grey}}>
                        What do you want today
                    </Text>
                </View>
                <View style={{alignSelf:"center"}}>
                    <Button title={"Log out"} onPress={()=>{
                    navigation.goBack()}
                    }></Button>
                </View>
            </View>


            <View style={{marginTop:40,
                flexDirection: 'row',
                paddingHorizontal:20}}>
                <View style={style.inputContainer}>
                    <Icon name="search" size={28}/>



                    <TextInput style={{flex:1,fontSize:18}}placeholder={"Search for foood"} onChangeText={searchHandler}></TextInput>

                </View>

                <View style={style.sortBtn}>
                    <Icon name="tune" size={28} color={COLORS.white} />


                </View>



            </View>




            <View>
                <ListCategories />



            </View>



            <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={products} //i importujes food iz data
                renderItem={({item})=>item.name.includes(search)?<Card clothes={item}/>:<></>} //food je ono sto si gore proslijedila u card
            />




        </SafeAreaView>
    );
};


const style = StyleSheet.create({
    header:{
        marginTop:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,

    },
    inputContainer:{
        flex:1,
        height:50,
        borderRadius:10,
        flexDirection: 'row',
        backgroundColor: COLORS.light,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    sortBtn:{
        width:50,
        height:50,
        marginLeft:10,
        backgroundColor:COLORS.primary,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listCategoriesCont:{
        paddingVertical:30,
        alignItems:"center",
        paddingHorizontal:20,

    },
    categoryBtn:{

        height:45,
        width: 120,
        marginRight: 7,
        borderRadius: 30,
        alignItems: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row',
    },
    categoryBtnImg:{
        height: 35,
        width: 35,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        justifyContent:"center",
        alignItems: "center"
    },
    card:{

        height:220,
        width: cardWidth, //svakoj kartici damo pola ekrana
        marginHorizontal:10,
        marginBottom:20,
        marginTop: 50,
        borderRadius:15,
        elevation:13,
        backgroundColor:COLORS.white,
    },
    addToCartBtn: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },

});





export default HomeScreen;