import { types } from "../components/types/types";

const inicialState={
    loading: false,
    msgError: null
}

//ui
export const uiReducer = (state=inicialState, action )=>{
    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload
            }
        
        case types.uiRemoveError:
            
            return {
                    ...state,
                    msgError: null 
                }    
    
       default:
        return state;
    }
}