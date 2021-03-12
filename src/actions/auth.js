//import { useSelector } from "react-redux";
import Swal from 'sweetalert2' //complemento de internet para ventanas 
import { types } from "../components/types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { finishLoading, startLoading } from "./ui";

export const startLoginEmailPassword = (email,password) => {

    return( dispatch )=>{
        dispatch (startLoading()) //coloca al state en true

        firebase.auth().signInWithEmailAndPassword(email,password)
            .then( ({user}) => {

                dispatch (
                    login(user.uid, user.displayName)
                )
                
                dispatch (finishLoading()) //coloca el loading en false

            }).catch(e =>{ 
                console.log(e);
                dispatch (finishLoading());
                Swal.fire('Error', e.message,'error' ) //muestra el error con ayuda de Swal
                })

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
        }).catch(e => {
            console.log(e)
            Swal.fire('Error', e.message,'error' );
        })
            
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
    });



export const startLogout = ()=>{
    return async(dispatch) =>{
        await firebase.auth().signOut(); //click logout
        dispatch(logout() )
    }
}    

export const logout = ()=>({
    type: types.logout
}   )