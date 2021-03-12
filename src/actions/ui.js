import { types } from "../components/types/types"

export const setError = (err) =>({ //err es el error que envia al activar la función
    type:types.uiSetError,
    payload: err
});

export const removeError = () =>({ //remueve el error
    type:types.uiRemoveError
    
});

export const startLoading = () =>({ //remueve el error
    type:types.uiStartLoading
});

export const finishLoading = () =>({ //remueve el error
    type:types.uiFinishLoading
});