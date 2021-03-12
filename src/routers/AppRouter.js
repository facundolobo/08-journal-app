import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
   
import {firebase} from '../firebase/firebase-config'

import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';


export const AppRouter = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        firebase.auth().onIdTokenChanged((user)=>{ //crean un obsevador que esta pendientes de los cambios de autentificación
                if(user?.uid){//si existe ?
                    dispatch(login(user.uid,user.displayName)); //enviamos los datos y logeamos
                } 
        }) 

    }, [dispatch])

    return (
    <Router>
        <div>

            <Switch>

                <Route 
            
                    path="/auth" 
                    component={ AuthRouter } 
                
                />

                <Route 
                    exact 
                    path="/" 
                    component={ JournalScreen }
                />

                <Redirect to="/auth/login"/>

            </Switch>

        </div>

    </Router>
    )
}
