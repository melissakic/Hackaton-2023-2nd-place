import {createContext, useContext, useState} from "react";

const [productArray,setProductArray]=useState([{amount:10,desc:"test",author:"melis"}])


const  initial={
   productArray,
    updateArray:setProductArray
}

const productsContex=createContext(initial)

export default productsContex;