import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'

import Sidebar from './Sidebar/sidebar'
import Main from './Main/main'

const Container = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    height: 100vh;
`

function Home() { 
    return (
        <Router>
            <Container>
                <Sidebar /> 
                <Main />
            </Container>
        </Router>
    )
}

export default Home