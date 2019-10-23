import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavContainer = styled.div`
    display: flex;
    align-items: center;
`

const NavLinks = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0 !important;
    margin: 0 !important;
    font-size: .8em;

    a + a { 
        margin-left: 50px;
    }
` 

function Navigator() { 
    return (
        <NavContainer> 
            <NavLinks> 
                <Link to='/management'> Geral </Link>
                <Link to='/management/deferred'> Vendas à Prazo </Link>
                <Link to='/management/expenses'> Despesas </Link>
                <Link to='/management/sales'> Vendas </Link>
                <Link to='/management/stock'> Estoque </Link>
            </NavLinks>
        </NavContainer>
    )
}

export default Navigator