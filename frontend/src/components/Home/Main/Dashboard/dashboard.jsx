import React from 'react'
import styled from 'styled-components'
import Header from '../Common/header'
import DrawExpenseChart from 'D3/expenses'
import { GetExpenseDashboardData } from 'Api/api-expenses'
import { Container } from '../styles'

const DashboardContainer = styled.div`
    display: grid;
    grid-template-areas: 'a b c'
                         'expenses expenses d';
    grid-template-rows: 1fr;
    
`

const Dashboard = () => { 
    const [data, setData] = React.useState([])

    React.useEffect(() => { 
        (async () => { 
            const { data } = await GetExpenseDashboardData()
            setData(data.items)
            DrawExpenseChart('expense-chart', data)
        })()
    }, [])

    return (
        <Container>
            <Header title='Dashboard' />
            <DashboardContainer> 
                <div style={{ gridArea: 'a' }}></div>
                <div style={{ gridArea: 'b' }}></div>
                <div style={{ gridArea: 'c' }}></div>
                <div id="expense-chart" style={{ gridArea: 'expenses' }}> </div>
                <div style={{ gridArea: 'd' }}></div>
            </DashboardContainer>
        </Container>
    )
}

export default Dashboard