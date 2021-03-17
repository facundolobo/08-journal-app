import { types } from "../../components/types/types"

describe('Pruebas en test', () => {

    const typesLocal = {
        login:'[Auth] Login',
        logout: '[Auth] Logout',
        
        uiSetError: '[UI] Set Error',
        uiRemoveError: '[UI] Remove Error',
    
        uiStartLoading: '[UI] Start loading',
        uiFinishLoading: '[UI] Finish loading',
    
        notesAddNew: '[Notes] New note',
        notesActived: '[Notes] Set active note',
        notesLoad: '[Notes] Load notes',
        notesUpdated: '[Notes] Update note',
        notesFileUrl: '[Notes] Update image url',
        notesDelete: '[Notes] Delete note',
        notesLogoutCleaning: '[Notes] Logout Cleaning'
    
    }
    
    test(' el objeto estar completo ', () => {
        

        const wrapper = types;
        //console.log(wrapper);
        expect(wrapper).toEqual(typesLocal)
    })
    
})
