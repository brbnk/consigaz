import { createStore } from 'redux'

const INITIAL_STATE = { 
    isAuthenticated: false
}

const reducer = (state = INITIAL_STATE, action) => { 
    switch (action.type) { 
        case "AUTHORIZED": 
            return { isAuthenticated: true }
        case "UNAUTHORIZED": 
            return { isAuthenticated: false }
        default:    
            return state
    }
}

export const store = createStore(reducer)
