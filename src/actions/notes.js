
 import { types } from "../components/types/types";
import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";

export const startNewNote = ()=>{
    
    return async( dispatch, getState )=>{ //obtiene todo es state "getState"
    
        const {uid}= getState().auth; //obtenemos el id del usuario
        console.log(uid);
        
        const newNote ={ //nodo una nota nueva
            title:'',
            body: '',
            date: new Date().getTime() //obteemos la fecha actual
        }

        const doc = await db.collection(`${uid}/journal/notes`).add( newNote); //crea un archivo en la base de datos 
        //console.log(doc);
        dispatch( activeNode ( doc.id, newNote ));
    }
}
export const startLoadingNotes = (uid) =>{
    return async(dispatch)=>{
        const notes = await loadNotes(uid);
        dispatch(setNotes (notes));
    }
}

export const activeNode = (id, note) => ({
    type: types.notesActived,
    payload: {
        id,
        ...note
    }
});

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
});

export const startSaveNote = (note) => {
    return async(dispatch, getState) =>{

        const { uid } = getState().auth; //obtenemos el id del usuario
        if(!note.url){
            delete note.url;
        }

        const noteToFirestore = {...note};
        delete noteToFirestore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
    }
} 