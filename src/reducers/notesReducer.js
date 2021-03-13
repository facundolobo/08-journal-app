import { types } from "../components/types/types";

/*
    {
        notes: [],
        active: null,
        active: {
            id: 'qwekamsmasr',
            title: '',
            body: '',
            imageUrl: '',
            date: 123481123
        }
    }

*/
const inicialState ={
    notes: [],
    active: null
}

export const notesReducer =(state = inicialState , action)=>{
    switch (action.type) {
       
        case types.notesActived:
            return {
                ...state,
                active : {
                    ...action.payload
                }
            }

        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            }


        default:
           return state;
    }
}
