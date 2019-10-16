import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ children, ...rest }) => { 
    const { isAuthenticated } = useSelector(state => state)
    const history = useHistory()
    
    return (
        <Route 
            {...rest}
            render={() => { 
                isAuthenticated ? (children) : (history.push('/login'))
            }} 
        />
    )
}

export default PrivateRoute