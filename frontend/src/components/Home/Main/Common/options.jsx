import React from 'react'
import styled from 'styled-components'
import { useAuth } from '../../../../context/auth-context'

const Container = styled.div`
    img { 
        width: 40px;
        height: 40px;
        border-radius: 100%;
    }
`

function AccountOptions() {
    const { state } = useAuth()
    const src = state.user.photo ? state.user.photo : 'images/account.png'  
    
    return (
        <Container> 
            <img src={src} />
        </Container>
    )
}

export default AccountOptions
