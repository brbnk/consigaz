import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import AppProviders from '../context/index'
import { useAuth } from '../context/auth-context'

const loadProtectedSide = () => import('./Home/home') 
const Home = React.lazy(loadProtectedSide)
const Login = React.lazy(() => import('./Login/login'))

function App() { 
    const { state } = useAuth()
    
    React.useEffect(() => { 
        loadProtectedSide()
    }, [])

    return (
        <Router> 
            <Switch>
                <React.Suspense fallback={ <div> Loading... </div> }> 
                    { state.authenticated ? <Home /> : <Login /> } 
                </React.Suspense>
            </Switch>
        </Router>
    )
}

ReactDOM.render(
    <AppProviders> 
        <App />
    </AppProviders>,
    document.getElementById('app')
)

export default App