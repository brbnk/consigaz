import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'

const Container = styled.div`
    position: absolute;
    right: 20px;
    margin: 20px;

    span { 
        font-size: .6em;
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 1px;
    }
`

function Time() {
    const time = new Date()
    const [day, setDay] = useState(time.getDate())
    const [month, setMonth] = useState(time.getMonth()+1)
    const [year, setYear] = useState(time.getFullYear())
    const [hour, setHour] = useState(time.getHours())
    const [minute, setMinute] = useState(time.getMinutes())
    const [seconds, setSeconds] = useState(time.getSeconds())

    const props = useSpring({ 
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { 
            duration: 1500
        },
        reset: true
    })

    const monthConverter = (month) => { 
        switch(month) { 
            case 1: 
                return 'Janeiro'
            case 2: 
                return 'Fevereiro'
            case 3: 
                return 'Março'
            case 4: 
                return 'Abril'
            case 5: 
                return 'Maio'
            case 6: 
                return 'Junho'
            case 7: 
                return 'Julho'
            case 8: 
                return 'Agosto'
            case 9: 
                return 'Setembro'
            case 10: 
                return 'Outubro'
            case 11: 
                return 'Novembro'
            case 12: 
                return 'Dezembro'
        }
    }

    useEffect(() => { 
       let interval  = null

       interval = setInterval(() => { 
           setSeconds(seconds => {
                if (seconds == 59) {
                    setMinute(minute => { 
                        if (minute == 59) { 
                            setHour(hour => { 
                                if (hour > 23) {
                                    return 0
                                }
                                return hour + 1
                            })
                            return 0
                        }
                        return minute + 1
                    })
                    return 0
                }
                return seconds + 1
           })
       }, 1000)

       return () => clearInterval(interval)
    }, [seconds, minute])

    return (
        <Container> 
            <span style={{ marginRight: '20px' }}> {`${day} de ${monthConverter(month)}, ${year}`}</span>
            <span>{`${hour}`}</span>
            <animated.span style={props}> : </animated.span>
            <span>{`${minute}`}</span>
            <animated.span style={props}> : </animated.span>
            <span>{`${seconds}`}</span>
        </Container>
    )
}

export default Time
