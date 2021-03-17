import { finishLoading, removeError, setError, startLoading } from "../../actions/ui"
import { types } from "../../components/types/types";

describe('Pruebas en ui-actions', () => {
    test('todas las acciones deben funcionar ', () => {
        
        const error= 'Help!!!'
        const action = setError(error);
        expect(action).toEqual({
            type:types.uiSetError,
            payload: error
        });

       const removeErrorAction= removeError()
       const startLoadingAction=startLoading()
       const finishLoadingAction=finishLoading()

       expect(removeErrorAction).toEqual({
        type:types.uiRemoveError
        });

        expect(startLoadingAction).toEqual({
            type:types.uiStartLoading
        });

        expect(finishLoadingAction).toEqual({
            type:types.uiFinishLoading
        });

    
    })
})    

