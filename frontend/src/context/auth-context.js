/* Export the AuthProvider. This will be the store 
   to all of our values related to autentication */

import React from 'react'

const AuthContext = React.createContext()

const INITIAL_STATE = false

const reducer = (state, action) => { 
    console.log(action.state)
    switch(action.type) { 
        case 'AUTHORIZE':
        case 'UNAUTHORIZE':
            return action.state
        default:
            action.state
    }
}

function AuthProvider(props) { 
    const [authenticated, dispatch] = React.useReducer(reducer, INITIAL_STATE)
    
    return (
        <AuthContext.Provider 
            value={{ 
                authenticated,
                authorize: () => dispatch({ type: 'AUTHORIZE', state: true }),
                unauthorize: () => dispatch({ type: 'UNAUTHORIZE', state: false }) 
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

