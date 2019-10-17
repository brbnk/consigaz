import React from 'react'
import Table from './table'
import Header from '../Common/header'

import { Container } from '../styles'

function Users() { 
    return (
        <Container> 
            <Header title='Usuários' /> 
            <Table />
        </Container>
    )
}

export default Users