import Swal from "sweetalert2";

import { db } from "../firebase/firebase-config";

import { loadNotes } from "../helpers/loadNotes";
import { fileUpload } from "../helpers/fileUpload";
import { types } from "../components/types/types";

//react-journal

export const startNewNote = () => {
    return async( dispatch, getState ) => { //obtiene todo es state "getState"

        const { uid } = getState().auth; //obtenemos el id del usuario
//        console.log(uid);
        
        const newNote = { //nodo una nota nueva
            title: '',
            body: '',
            date: new Date().getTime() //obteemos la fecha actual
        }

        const doc = await db.collection(`${uid}/journal/notes`).add( newNote); //crea un archivo en la base de datos 
        //console.log(doc);
        dispatch( activeNode ( doc.id, newNote ));

        dispatch(addNewNote(doc.id, newNote )); //mostrar la nota apenas se guarde
        
        //dispatch( addNewNote ( doc.id, newNote ));
    }
}

export const activeNode = (id, note) => ({
    type: types.notesActived,
    payload: {
        id,
        ...note
    }
});

export const addNewNote = (id, note) =>({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
})

export const startLoadingNotes = ( uid ) =>{
    return async( dispatch ) => {
       
        const notes = await loadNotes(uid);
        dispatch(setNotes (notes));
    }
}

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
});


export const startSaveNote = ( note ) => {
    return async( dispatch, getState ) =>{

        const { uid } = getState().auth; //obtenemos el id del usuario

        if ( !note.url ){
            delete note.url;
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        await db.doc(`${ uid }/journal/notes/${ note.id }`).update( noteToFirestore );
       
        dispatch( refreshNote( note.id, noteToFirestore ) ); //actualizamos la nota de la izq

        Swal.fire('Saved', note.title, 'success');
    }
} 

export const refreshNote = (id,note) => ({ //funcion de actualizar la nota izq
    type: types.notesUpdated,
    payload: {
        id, 
        note: {
            id,
            ...note
        }
    }
})
//cargar la imagen
export const startUploading = (file) =>{
    return async( dispatch, getState ) => {
        const { active:activeNote } = getState().notes;
        
        //cartel
        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            onBeforeOpen: () => { //ejecuta antes de 
                Swal.showLoading();
            }
        });

       const fileUrl= await fileUpload(file);
       activeNote.url=fileUrl; //le agregamos el url
        
        //console.log(fileUrl)
       dispatch(startSaveNote(activeNote)) 
       Swal.close(); //cerramos la venta

    }
}
export const startDeleting =(id)=>{
    return async(dispatch, getState) =>{
        const uid= getState().auth.uid;
        await db.doc(`${uid}/journal/notes/${id}`).delete();
        
        dispatch(deleteNote(id))
        console.log('id nota',id)
    }
}
export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
})

export const noteLogout =() =>({
    type: types.notesLogoutCleaning
    
})