/*
  {
      uid: askpdjoapsmdo1231234,
      name: 'Fernando'
  }
 */

import { types } from "../components/types/types";
                            //inicializamos vacio
export const authReducer = (state = {} , action) => {
    switch (action.type) {

        case types.login: //si es login retorna el nombre de usuario 
            return{
                uid: action.payload.uid,
                name: action.payload.displayName
            }
           

        case types.logout: //si es logout retorna un objeto vacio
            return {} 
        default:
            return state 
    }
}
