import React from 'react'
import moment from 'moment' //instalacion npm install moment --save , para la fehca hora etc
import { useDispatch } from 'react-redux'
import { activeNode } from '../../actions/notes'

export const JournalEntry = ({id,date,title,body,url}) => {

    const noteDate= moment(date)
    const dispatch = useDispatch()


    const handleEntryClick = () =>{
        dispatch(activeNode(id, {id,date,title,body,url} ));
    }
    
    return (
        <div className="journal__entry pointer"
            onClick={handleEntryClick}
        >
            {
                url && //si existe imagen muestre esto
                <div 
                className="journal__entry-picture"
                style={{ //agregamos una imagen de internet
                    backgroundSize: 'cover',
                    backgroundImage: `url(${url})`
                    
                }}
            ></div>
            }
            
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                   {body}
                </p>
            

            </div>
            <div className="journal__entry-date-box">
                <span>{noteDate.format('dddd')} </span>
                <h4>{noteDate.format('Do')}</h4>
            </div>
        </div>
    )
}
