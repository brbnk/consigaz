import React, { lazy } from 'react'
import { Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'

const Dashboard = lazy(() => import('./Dashboard/dashboard'))
const Reports = lazy(() => import('./Reports/reports'))
const Users = lazy(() => import('./Users/users'))

const Container = styled.div`
    padding: 10px 40px;
    background: #212B34;
    box-shadow: inset 0 0 .3em black;
`

function Main() { 
    return (
        <>
            <Container> 
                <React.Suspense fallback={<h1> Loading... </h1>}>
                    <Redirect exact from='/' to='/dashboard'/>
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/reports' component={Reports} />
                    <Route path='/users' component={Users} />
                </React.Suspense>
            </Container>
        </>
    )
}

export default Main