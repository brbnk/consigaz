import React from 'react'
import { useSpring, animated } from 'react-spring'
import io from 'socket.io-client'

import { useAuth } from '../../context/auth-context'
import './login.scss'

const socket = io('http://localhost:3000')

const Login = () => {
    const { authorize } = useAuth()
    
    var popupWindow = null

    const props = useSpring({ 
        from: { boxShadow: '0 0 5px #00FFD5' },
        to: { boxShadow: '0 0 20px #00FFD5' },
        config: { 
            duration: 1000,
        },
        reset: true
    })

    React.useEffect(() => { 
        socket.on('google', token => { 
            localStorage.setItem('jwt', token)
            popupWindow.close()
            authorize(
                
            )
        })
    }, [])

    function openPopup() { 
        const width = 600, height = 600
        const left = (window.innerWidth / 2) - (width / 2)
        const top = (window.innerHeight / 2) - (height / 2)
        const url = `http://localhost:3000/auth/google?socketId=${socket.id}`

        return window.open(url, '',       
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
            scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
            height=${height}, top=${top}, left=${left}`
        )
    }

    const startAuth = () => { 
        popupWindow = openPopup()
    }

    return (
        <div className="login">
            <div className="logo">
                <img src="images/consigaz.svg"/>
                <h1> Consigaz </h1>
            </div>

            <animated.div className="signin" style={props} onClick={ startAuth }>
                <img src="images/google-button.png" />
            </animated.div> 
        </div>
    )
}

export default Login