import {createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import {auth} from "../firebaseConfig";
import {Alert} from "react-native";


class AuthManager {

    static addUser(email: string, password: string, completionHandler: () => void) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                let user = userCredential.user;
                // Maybe radi
               // @ts-ignore
               //  sendEmailVerification(auth.currentUser)
               //      .then(() => {
               //          // @ts-ignore
               //          completionHandler()
               //      })
               //      .catch((error) => {
               //          Alert.alert("Error with email verification")
               //      })
                completionHandler()
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert("Error with creating user")
            });
    }

    static logUser(email: string, password: string, completionHanlder: () => void) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                let user = userCredential.user;
                // if (user.emailVerified) {
                //     completionHanlder(user)
                // } else {
                //     Alert.alert("Please verify your email before login")
                // }
                completionHanlder()
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert("Error with login user")
            });
    }

}

export {AuthManager};