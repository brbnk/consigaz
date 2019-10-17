import React from 'react'
import { HeaderContainer, Title } from '../styles'
import AccountOptions from './options' 

function Header({ title }) { 
    return(
        <HeaderContainer>
            <Title> { title } </Title>
            <AccountOptions />
        </HeaderContainer>
    )
}

export default Header