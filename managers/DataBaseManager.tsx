
// @ts-ignore

import {auth, db} from "../firebaseConfig";
import {user} from "./AuthManager";
import { collection, addDoc } from "firebase/firestore";
import {useContext} from "react";
import productsContex from "../productsContex";
import firebase from "firebase/compat";

class DataBaseManager{
    static async addInDatabase(path: string, desc: string, amount: string) {
        const image = {
            imagePath: path,
            productDescription: desc,
            productAmount: amount,
            author: user.email
        }

        try {
            const docRef = await addDoc(collection(db, "users"), {
                first: "Ada",
                last: "Lovelace",
                born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }
}

export {DataBaseManager}