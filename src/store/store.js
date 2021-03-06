import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { authReducer } from "../reducers/authReducer";
import { notesReducer } from "../reducers/notesReducer";
import { uiReducer } from "../reducers/uiReducer";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


//funcion para conbinar varios reducer
const reducers= combineReducers({
    auth: authReducer, //funcion de authReducer que llamaremos auth
    ui: uiReducer, //funcion de uiReducer que llamaremos ui
    notes: notesReducer
})

//importar esto en el punto mas alto de la app abajo de index
export const store = createStore(
        reducers,
        composeEnhancers(
            applyMiddleware (thunk)
            )
    ); //la funcion "createStore" solo recibe un reducer 