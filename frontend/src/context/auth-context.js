/* Export the AuthProvider. This will be the store 
   to all of our values related to autentication */

import React from 'react'

const AuthContext = React.createContext()

const INITIAL_STATE = {
    authenticated: false,
    user: { }
}

const reducer = (state, action) => { 
    switch(action.type) { 
        case 'AUTHORIZE':
        case 'UNAUTHORIZE':
            return { ...action.payload }
        default:
            state
    }
}

function AuthProvider(props) { 
    const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE)
    
    return (
        <AuthContext.Provider 
            value={{ 
                state,
                authorize: (user) => dispatch({ type: 'AUTHORIZE', payload: { user, authenticated: true }}),
                unauthorize: () => dispatch({ type: 'UNAUTHORIZE', payload: { user: {}, authenticated: false }})
            }} {...props} 
        />
    )
}

function useAuth() {
    const context = React.useContext(AuthContext)
    if (context === undefined) {
        throw new Error(`useAuth must be used within a AuthProvider`)
    }
    return context
}

export { 
    AuthProvider,
    useAuth
}

