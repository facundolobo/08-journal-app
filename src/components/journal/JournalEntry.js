import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{ //agregamos una imagen de internet
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg)'
                    
                }}
                >
                
            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    el cuerpo humano tiene tal cantidad de huesos
                </p>
            

            </div>
            <div className="journal__entry-date-box">
                <span>Monday </span>
                <h4>28</h4>
            </div>
        </div>
    )
}
