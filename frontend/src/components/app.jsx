import React from 'react'
import ReactDOM from 'react-dom'
import AppProviders from '../context/index'
import { useAuth } from '../context/auth-context'

const Login = React.lazy(() => import('./Login/login'))
const Home = React.lazy(() => import('./Home/home'))

function App() { 
    const { authenticated } = useAuth()
    return (
        <React.Suspense fallback={<div> Loading... </div> }> 
            { authenticated ? <Home /> : <Login /> }
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