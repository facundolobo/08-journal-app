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
        case types.notesAddNew:
            console.log("reducer")
            return{
                ...state,
                notes: [action.payload, ...state.notes ]
            }

        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            }
            
        case types.notesUpdated:
           return{
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id
                        ? action.payload.note
                        : note
                )
            }

        case types.notesDelete:
            //console.log(action)
            return{
                ...state,
                active: null,
                notes: state.notes.filter(note => note.id !== action.payload)
            }

        case types.notesLogoutCleaning:
            console.log('borrando')
            return {
                ...state,
                notes: [],
                active: null
            }


        default:
           return state;
    }
}
