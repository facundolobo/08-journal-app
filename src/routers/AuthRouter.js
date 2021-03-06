import React from "react";

//inportarcion de la pagina oficial
import {
  
  Switch,
  Route,
  Redirect

} from "react-router-dom";

import { LoginScreen } from '../components/auth/LoginScreen'
import { RegistrerScreen } from '../components/auth/RegistrerScreen'



export const AuthRouter = () => {
    return (
        <div className="auth__main"> {/**buscara un archivo en la careta components/auth.scss */}
            <div className="auth__box-container">

            <Switch>

                <Route 
                    exact
                    path="/auth/login" 
                    component={ LoginScreen }
                />

                <Route 
                    exact
                    path="/auth/register" 
                    component={ RegistrerScreen }
                />
                
                <Redirect to="/auth/login"/>
            </Switch>
            
            
            {/*
                Router no va ..ni exact
                path="/auth/login"
                component={LoginScreen}

                path="/auth/register"
                component={RegisterScreen}

                //redirect to="/auth/login"
            */}
            </div>
        </div>
    )
}
