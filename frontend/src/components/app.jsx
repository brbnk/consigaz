import React from 'react'
import ReactDOM from 'react-dom'

import AppProviders from '../context/index'
import { useAuth } from '../context/auth-context'

const loadProtectedSide = () => import('./Home/home') 
const Home = React.lazy(loadProtectedSide)
const Login = React.lazy(() => import('./Login/login'))
import LoadSpinner from './Utils/spinner'

function App() { 
    const { state } = useAuth()
    
    React.useEffect(() => { 
        loadProtectedSide()
    }, [])

    return (
        <React.Suspense fallback={ <LoadSpinner /> }> 
            { true ? <Home /> : <Login /> } 
        </React.Suspense>
    )
}

ReactDOM.render(
    <AppProviders> 
        <App />
    </AppProviders>,
    document.getElementById('app')
)

export default App