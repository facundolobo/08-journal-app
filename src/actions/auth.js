import { useSelector } from "react-redux";
import { types } from "../components/types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";

export const startLoginEmailPassword = (email,password) => {

    return( dispatch )=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then( ({user}) => {

                dispatch (
                    login(user.uid, user.displayName)
                )
            }).catch(e => console.log(e))

        //auth()
        //signIn ... email...password....(email,password)

        //dispatch(login(123,'Pedro'));
        
    }
}

export const starRegisterWithEmailPasswordName= (email,password, name) =>{
    return (dispatch)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then( async({user}) => {

            await user.updateProfile({displayName: name}); //agregamos el name al objeto user
            dispatch (
                login(user.uid, user.displayName)
            )
        }).catch(e => console.log(e))
            
    }
}
  
export const startGoogleLogin = () => {
    
    return ( dispatch ) =>{
        firebase.auth().signInWithPopup(googleAuthProvider)
         .then( ({user}) => {
             dispatch(
                 login(user.uid, user.displayName)
             )
         })
        
    }
}


export const login = (uid,displayName) => ({
        type: types.login,
        payload: {
            uid,
            displayName
        }
    })