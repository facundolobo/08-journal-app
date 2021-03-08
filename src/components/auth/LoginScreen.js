import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../actions/auth'
import { useForm } from '../hooks/useForm'

export const LoginScreen = () => {


    const dispatch = useDispatch(); //lo necesitamos para agregar el dispath a redux
    
    //bloque para useForm manejo de formularios agregar texto
    const [formValue, handleInputChange]= useForm({
        email: 'nando@gmail.com',
        password: '123456'
    })

    const {email,password}= formValue;
    //------

    //funcion para guardar el usuario
    const handleLogin = (e) =>{
        e.preventDefault();
        
        dispatch( login(12345,'Hernando') ); //el login es de la carpeta auth actions 


    }

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="email"
                    className="auth__input"
                    autoComplete="off"
                    //use form
                    name="email"
                    value={email}
                    onChange={handleInputChange}
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

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    //disabled={true}
                >
                    Login
                </button>

                <hr/>
                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    
                    {/*boton de google agregado de repositorio */}
                    <div 
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

            <Link 
                to="/auth/register"    
                className="link"
            >
                Create new Account
            </Link>

            </form>
        </>
    )
}
