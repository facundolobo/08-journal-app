import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,

  Redirect
} from "react-router-dom";
   
import {firebase} from '../firebase/firebase-config'

import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PublicRouter } from './PublicRouter';
import { PrivateRoute } from './PrivateRoute';


export const AppRouter = () => {

    const [cheking, setCheking] = useState(true) //bandera para saber si esta autentificado
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {

        firebase.auth().onIdTokenChanged((user)=>{ //crean un obsevador que esta pendientes de los cambios de autentificación
                if(user?.uid){//si existe ?
                    dispatch(login(user.uid,user.displayName)); //enviamos los datos y logeamos
                    setIsLoggedIn(true);
                } else{
                    setIsLoggedIn(false);
                }
                setCheking(false)
        }) 

        setCheking(false)//cambiamos el estado

    }, [dispatch,cheking]) //si cambia eso se activa

    if(cheking){
        return (<h1>Espere...</h1>)
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
                    path="/" 
                    component={ JournalScreen }
                    isAuthenticated={isLoggedIn}
                />

                <Redirect to="/auth/login"/>

            </Switch>

        </div>

    </Router>
    )
}
