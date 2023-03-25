
// @ts-ignore

import {auth,db} from "../firebaseConfig";
import {user} from "./AuthManager";
import { collection, addDoc,doc ,getDoc} from "firebase/firestore";

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

    static async readFromDatabase(){
        // @ts-ignore
        const querySnapshot = await getDocs(collection(db, user.email));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    }
}

export {DataBaseManager}