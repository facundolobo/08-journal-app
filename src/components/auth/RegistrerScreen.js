import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'

import { useDispatch, useSelector } from 'react-redux'

import validator from 'validator';//"validar email"//instalar "npm i validator" para ahcer validacion de email etc
import { setError,removeError } from '../../actions/ui';
import { starRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegistrerScreen = () => {

    const dispatch = useDispatch(); //lo necesitamos para agregar el dispath a redux
    
    const {msgError} = useSelector(state => state.ui) //obtener un valor del msgError de reducer "uiReducer"


    //use form 
    const [formValue, handleInputChange]= useForm({
        name:'Hernando',
        email: 'nando@gmail.com',
        password: '123456',
        password2: '123456'
    })

    const {name,email,password,password2}= formValue;


    //submit
    const handleRegister = (e)=>{
        e.preventDefault();
        //console.log(name,email,password,password2)
        
        if(isFormValid()){
            dispatch( starRegisterWithEmailPasswordName(email, password, name))
            //console.log('Formulario correcto');
            
        }
    }

    //validacion del registro
    const isFormValid = () =>{ 
        
        if(name.trim().length === 0 ){
            //console.log('Name is required');

            dispatch(setError('Name is required'));

            return false;
        }else if(!validator.isEmail(email)){ //verificamos si es un email

            //console.log('Email is not valid')
            dispatch(setError('Email is not valid'));
            return false;
        }else if(password !== password2 || password.length <5 ){
            //console.log('password should be at least 6 caracters and match each ather')
            dispatch(setError('password should be at least 6 caracters and match each ather'));
            return false;
        }

        dispatch( removeError() );
        return true;
    }

    return (
        <>
        <h3 className="auth__title">Register</h3>
        
        {
            msgError &&
            (<div className="auth__alert-error">
                {msgError}
            </div>)
        }

        <form 
            onSubmit={handleRegister}
            className="animate__animated animate__fadeIn animate__faster"
        >
            <input
                type="text"
                placeholder="Name"
                className="auth__input"
                autoComplete="off"
                
                //use form
                name="name"
                value={name}
                onChange={handleInputChange}
                //--
            />

            <input
                type="text"
                placeholder="email"
                className="auth__input"
                autoComplete="off"
                
                //use form
               
                value={email}
                onChange={handleInputChange}
                name="email"
                //--
                />

            <input
                type="password"
                placeholder="password"
                className="auth__input"
                //use form
                
                name="password"
                 value={password}
                 onChange={handleInputChange}
                 
                 //--
            />
            <input
                type="password"
                placeholder="Confirm"
                className="auth__input"
                
                //use form
                
                name="password2"
                 value={password2}
                 onChange={handleInputChange}
                 
                 //--
            />

            <button
                type="submit"
                className="btn btn-primary btn-block mb-5"
                
                //disabled={true}
            >
                Register
            </button>

  

        <Link 
            to="/auth/login"    
            className="link"
        >
            Already registered?
        </Link>

        </form>
    </>
    )
}
