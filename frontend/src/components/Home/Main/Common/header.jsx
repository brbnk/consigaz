import React from 'react'
import { HeaderContainer, Title } from '../styles'
 
function Header({ title }) { 
    return(
        <HeaderContainer>
            <Title> { title } </Title>
        </HeaderContainer>
    )
}

export default Header