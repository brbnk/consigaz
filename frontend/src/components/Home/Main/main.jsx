import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'

import AccountOptions from './Account/options'
import Dashboard from './Dashboard/dashboard'
import Reports from './Reports/reports'
import Users from './Users/users'

const Container = styled.div`
    padding: 40px;
    background: #212B34;
    box-shadow: inset 0 0 .3em black;
`

function Main() { 
    return (
        <>
            <AccountOptions />
            <Container> 
                <Redirect exact from='/' to='/dashboard'/>
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/reports' component={Reports} />
                <Route path='/users' component={Users} />
            </Container>
        </>
    )
}

export default Main