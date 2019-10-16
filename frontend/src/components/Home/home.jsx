import React from 'react'
import { Route } from 'react-router-dom'

import Dashboard from './Dashboard/dashboard'

const Home = () => { 
    return (<> 
        <Route path="/home/dashboard" component={ Dashboard } />
    </>)
}

export default Home