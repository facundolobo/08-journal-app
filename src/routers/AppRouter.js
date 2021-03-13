import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
   
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebase-config'
import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from './PrivateRoute';
import { JournalScreen } from '../components/journal/JournalScreen'

import { login } from '../actions/auth';
import { PublicRouter } from './PublicRouter';

import {  startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {
    
    const dispatch = useDispatch()
    
    const [checking, setChecking] = useState(true) //bandera para saber si esta autentificado
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    useEffect(() => {

        firebase.auth().onAuthStateChanged(async(user)=>{ //crean un obsevador que esta pendientes de los cambios de autentificación
                if(user?.uid){//si existe ?
                    dispatch( login(user.uid, user.displayName)); //enviamos los datos y logeamos

                    setIsLoggedIn(true);
                    
                    //console.log('app router')
                    //const notes=  await loadNotes(user.uid); //cargamos todas las notas segun el id usuario
                    dispatch(startLoadingNotes(user.uid));
                } else{
                    setIsLoggedIn(false);
                }
                setChecking(false)
        }) 

        setChecking(false)//cambiamos el estado

    }, [dispatch,setIsLoggedIn,setChecking]) //si cambia eso se activa 

    if(checking){
        return (<h1>Wait...</h1>)
    }

    return (
    <Router>
        <div>

            <Switch>

                <PublicRouter 
            
                    path="/auth" 
                    component={ AuthRouter } 
                    isAuthenticated={isLoggedIn}
                
                />

                <PrivateRoute 
                    exact 
                    isAuthenticated={isLoggedIn}
                    path="/" 
                    component={ JournalScreen }
                />

                <Redirect to="/auth/login"/>

            </Switch>

        </div>

    </Router>
    )
}
