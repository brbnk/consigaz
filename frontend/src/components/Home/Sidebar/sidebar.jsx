import React from 'react'
import { useSpring, animated } from 'react-spring'
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
    display: flex;
    justify-content: center;    
    transition: all .5s;
    border-left: 3px solid #212B34; 

    &:hover { 
        background-color: white;
    }

    i { 
        padding: 30px;
        margin-right: 10px;
        font-size: 2em !important;
        color: white;
        transition: all .5s;

        &:hover { 
            color: #212B34;
        }
    }

    a { 
        display: flex;
        align-items: center;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-size: 1em;
        transition: all .5s;
    }
`

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'SSExbFLF';
    letter-spacing: 5px;

    img { 
        color: white;   
        width: 25px;
        height: 80px;
        margin-right: 10px;
    }
`

function Sidebar() { 
    const opacity = useSpring({ 
        from: { opacity: 0 },
        opacity: 1,
        config: { 
            duration: 1000
        }
    })

    return (
        <Container> 
            <Logo> 
                <animated.img style={opacity} src="images/consigaz.svg"/>
            </Logo>
            <Lista>
                <Item> 
                    <Link to='/dashboard'> 
                        <animated.i style={opacity} className='material-icons'> dashboard </animated.i>
                    </Link> 
                </Item>
                <Item> 
                    <Link to='/reports'> 
                        <animated.i style={opacity} className='material-icons'> timeline </animated.i>
                    </Link> 
                </Item>
                <Item> 
                    <Link to='/employees'> 
                        <animated.i style={opacity} className='material-icons'> people </animated.i>
                    </Link> 
                </Item>
                <Item> 
                    <Link to='/stores'> 
                        <animated.i style={opacity} className='material-icons'> emoji_transportation </animated.i>
                    </Link> 
                </Item>
                <Item> 
                    <Link to='/management'> 
                        <animated.i style={opacity} className='material-icons'> attach_money </animated.i>
                    </Link> 
                </Item>
                <Item> 
                    <Link to='/users'> 
                        <animated.i style={opacity} className='material-icons'> person </animated.i>
                    </Link> 
                </Item>
            </Lista>
        </Container>
    )
}

export default Sidebar