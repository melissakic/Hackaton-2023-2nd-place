
// @ts-ignore

import {auth,db} from "../firebaseConfig";
import {user} from "./AuthManager";
import { collection, addDoc,doc,deleteDoc ,getDocs} from "firebase/firestore";
import {Animated} from "react-native";
import add = Animated.add;

class DataBaseManager{
    static async addInDatabase(path: string, desc: string, amount: string) {
        const image = {
            imagePath: path,
            productDescription: desc,
            productAmount: amount,
            author: user.email
        }
        // @ts-ignore
        const docRef = await addDoc(collection(db, auth.currentUser?.email), {
            amount:amount,
            description:desc,
            image:path,
            author:user.email
        });
        console.log("Document written with ID: ", docRef.id);

    }

    static async addInDatabaseCart( name: string, amount: string) {
        // @ts-ignore
        const docRef = await addDoc(collection(db, "cart"), {
            amount:amount,
            name:name,
            author:user.email
        });
        console.log("Document written with ID: ", docRef.id);
    }
//@ts-ignore
    static async readFromDatabase(adder:()=>void){
        // @ts-ignore
        adder([])
        const querySnapshot = await getDocs(collection(db, user.email));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots

            // @ts-ignore
            adder(prevstate=>{
                 return [...prevstate,{ imagePath:doc.data().image,productAmount:doc.data().amount,description: doc.data().description}]
            })
        });
    }

    static async readFromDatabaseCart(adder:()=>void,setPrice:()=>void){
        // @ts-ignore
        adder([])
        console.log("asdadsadas")
        const querySnapshot = await getDocs(collection(db, "cart"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // @ts-ignore
            setPrice(prevstate=>{
                return Number(prevstate)+Number(doc.data().amount)
            })
            // @ts-ignore
            adder(prevstate=>{

                return [...prevstate,{amount:doc.data().amount,
                    name:doc.data().name,
                    author:user.email}]
            })
        });
    }

    static async deleteFromData(amount:string){
        const querySnapshot = await getDocs(collection(db, user.email));
        querySnapshot.forEach((doc) => {
            // @ts-ignore
            if(doc.data().amount==amount){
                deleteDoc(doc.ref)
            }
            // doc.data() is never undefined for query doc snapshots
        });
    }
}

export {DataBaseManager}