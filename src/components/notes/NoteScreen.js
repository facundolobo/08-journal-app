import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeNode } from '../../actions/notes';
import { useForm } from '../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    const dispatch = useDispatch();

    const {active:note} = useSelector(state => state.notes) //renombro a active como note
    const [formValues, handleInputChange, reset] = useForm(note);

    const activeId= useRef(note.id); //useRef guarda una variable mutable que no redibujara todo el componente si cambia 

    useEffect(() => {
        if(note.id !== activeId.current ){
            reset (note)
            activeId.current = note.id; //lo cambiamos si es que se modifico
        }

    }, [reset,note])

    useEffect(() => {
        dispatch(activeNode(formValues.id, {...formValues}))
    }, [formValues,dispatch])
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
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    //use form
                    name="body"
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
