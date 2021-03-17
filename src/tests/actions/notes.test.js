// necesario apra crear un store
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = configureStore(middlewares); //funcion para crear un store
//--

import { startNewNote } from '../../actions/notes';

const store = mockStore({//para probar la funcion necesitamos un uid del usuario
    auth: { 
        uid: 'TESTING'
    }
})

describe('Pruebas con las acciones de notes', () => {
   
    test('debe de crear una nueva nota en startNewNote', async () => {
        
        await store.dispatch( startNewNote() );
     
          

    })
    
})