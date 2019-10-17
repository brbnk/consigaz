import React from 'react'
import styled from 'styled-components'

import Sidebar from './Sidebar/sidebar'
import Main from './Main/main'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 1fr;
    height: 100vh;
`

function Home() { 
    return (
        <Container>
            <Sidebar /> 
            <Main />
        </Container>
    )
}

export default Home