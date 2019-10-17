import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Container = styled.div`
    background-color: #212B34;
    border-right: 1px solid black;
    font-family: 'Montserrat', sans-serif;
    color: white;
    padding: 10px 0;
`

const Lista = styled.ul`
    list-style: none;
    margin: 0 !important;
    padding: 0 !important;
    margin-top: 20px !important;
`;

const Item = styled.li`
    transition: all .3s;
    border-left: 2px solid #212B34; 

    &:hover { 
        background-color: white;
        border-left: 2px solid #FF0000;
    }

    i { 
        padding: 10px;
        margin-right: 10px;
        font-size: 2.5em !important;
        color: #FF0000;
    }

    a { 
        display: flex;
        align-items: center;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-size: 1em;

        &:hover { 
            color: #333;
        }
    }
`

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'SSExbFLF';
    letter-spacing: 5px;

    img { 
        width: 20px;
        height: 80px;
        margin-right: 10px;
    }
`

function Sidebar() { 
    return (
        <Container> 
            <Logo> 
                <img src="images/consigaz.svg"/>
                <h1> Consigaz </h1>
            </Logo>
            <Lista>
                <Item> 
                    <Link to='/dashboard'> 
                        <i className='material-icons'> dashboard </i>
                        Dashboard 
                    </Link> 
                </Item>
                <Item> 
                    <Link to='/reports'> 
                        <i className='material-icons'> timeline </i>
                        Relatórios 
                    </Link> 
                </Item>
                <Item> 
                    <Link to='/users'> 
                        <i className='material-icons'> account_circle </i>
                        Usuários     
                    </Link> 
                </Item>
            </Lista>
        </Container>
    )
}

export default Sidebar