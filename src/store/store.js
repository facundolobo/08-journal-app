import { combineReducers, createStore } from "redux";
import { authReducer } from "../reducers/authReducer";

//funcion para conbinar varios reducer
const reducers= combineReducers({
    auth: authReducer //funcion de authReducer que llamaremos auth
})

//importar esto en el punto mas alto de la app abajo de index
export const store = createStore(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ); //la funcion "createStore" solo recibe un reducer 