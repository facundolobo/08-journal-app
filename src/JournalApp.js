import React from 'react'


import { Provider } from "react-redux";//importamos esto apra usar store
import { store } from './store/store';


import { AppRouter } from './routers/AppRouter'



export const JournalApp = () => {
    return (
        <div>
            <Provider store={store}> {/* aplicamos el store */}
                <AppRouter/>
            </Provider>
        </div>
    )
}
