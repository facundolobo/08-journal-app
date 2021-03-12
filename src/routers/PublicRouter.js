import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

export const PublicRouter = ({
    isAuthenticated,
    component: Component,
    ...res //trae todas las otras propiedades
}) => {



    return (
        <Route {...res}
        
            component={(props)=> (
                (isAuthenticated)
                    ?(<Redirect to="/" />)
                    :(<Component {...props} />)
            )}
        
        />
    )
}
PublicRouter.propTypes = {
    isAuthenticated : PropTypes.bool.isRequired ,
    component: PropTypes.func.isRequired
}