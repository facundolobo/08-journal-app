import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const {active:note} = useSelector(state => state.notes) //renombro a active como note
    const [formValues, handleInputChange, reset] = useForm(note);

    const activeId= useRef(note.id); //useRef guarda una variable mutable que no redibujara todo el componente si cambia 

    useEffect(() => {
        if(note.id !== activeId.current ){
            reset (note)
            activeId.current = note.id; //lo cambiamos si es que se modifico
        }


    }, [reset,note])
//    console.log(formValues);

    const {body, title} = formValues;

    return (
         <div className="notes__main-content">
            <NotesAppBar/>
           <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    //use form
                    value={title}
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    //use form
                    value={body}
                    onChange={handleInputChange}
                >
                </textarea>

                {
                    (note.url) 
                    && (<div className="notes__image">
                        <img
                            src="https://miracomosehace.com/wp-content/uploads/2020/03/fotografia-naturaleza-HD.jpg"
                            alt="imagen"
                        />
                    </div>)
                }
           </div>
        </div>
    )
}
