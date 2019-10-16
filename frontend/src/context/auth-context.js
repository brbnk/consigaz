/* Export the AuthProvider. This will be the store 
   to all of our values related to autentication */

import React from 'react'

const AuthContext = React.createContext()

function AuthProvider(props) { 
    const [ authenticated, setAuthenticated ] = React.useState(false)
    return <AuthContext.Provider value={{ authenticated }} {...props} />
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

