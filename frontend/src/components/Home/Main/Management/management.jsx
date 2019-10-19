import React from 'react'
import styled from 'styled-components'
import { Route, useRouteMatch } from 'react-router-dom'

import { Container } from '../styles'
import Header from '../Common/header'
import Navigator from './Navigator/navigator'

import General from './GeneralView/general'
import DeferredPayment from './DeferredPayments/deferred'
import Expenses from './Expenses/expenses'
import Sales from './Sales/sales'
import Stock from './StockControl/stock'

const ManagementContainer = styled.div`
    display: grid;
    grid-template-rows: .1fr .9fr;
    grid-template-columns: 1fr;
    height: 100%;
    width: 100%;
`

function Management() {
    let { url } = useRouteMatch()
    
    return (
        <Container> 
            <Header title='Controles' /> 
            <ManagementContainer>
                <Navigator />
                <Route exact path={`${url}`} component={Expenses}/>
                <Route exact path={`${url}/deferred`} component={DeferredPayment}/>
                <Route exact path={`${url}/expenses`} component={General}/>
                <Route exact path={`${url}/sales`} component={Sales}/>
                <Route exact path={`${url}/stock`} component={Stock}/>
            </ManagementContainer>
        </Container>
    )
}

export default Management