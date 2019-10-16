import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../store/store'

import Login from './Login/login'
import Home from './Home/home'
import PrivateRoute from './routes/private-wrapper'

const App = () => { 
    return (
        <Provider store={store}> 
            <Router> 
                <Switch> 
                    <Redirect exact from='/' to='/home' />
                    <Route path='/login' component={Login} />
                    <PrivateRoute path="/home">
                        <Home />
                    </PrivateRoute>
                </Switch>
            </Router>
        </Provider>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

export default App