import React, { useContext } from 'react'
import { Route, Redirect, Switch, __RouterContext } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import styled from 'styled-components'

import LoadSpinner from '../../Utils/spinner'
import AccountOptions from '../Main/Common/options'

import { 
    Dashboard, 
    Reports, 
    Users,
    Management,
    Employees,
    Stores 
} from './lazyComponents'

const Container = styled.div`
    padding: 10px 40px;
    background: #212B34;
    box-shadow: inset 0 0 .5em black;
`

function Main() { 
    const { location } = useContext(__RouterContext)
    const transitions = useTransition(location, location => location.pathname, { 
        from: { opacity: 0, transform: 'translate3d(-10%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(30%,0,0)' },
    })

    return (
        <Container> 
            <AccountOptions />
            <React.Suspense fallback={ <LoadSpinner /> }>
                {transitions.map(({ item, props, key }) => (
                    <animated.div key={key} style={{...props, height: '100%', position:'absolute', width: 'calc(100vw - 200px)' }}> 
                        <Switch location={item}> 
                            <Redirect exact from='/' to='/dashboard'/>
                            <Route path='/dashboard' component={Dashboard} />
                            <Route path='/reports' component={Reports} />
                            <Route path='/users' component={Users} />
                            <Route path='/employees' component={Employees} />
                            <Route path='/stores' component={Stores} />
                            <Route path='/management' component={Management} />
                        </Switch>
                    </animated.div>
                ))}
            </React.Suspense>
        </Container>
    )
}

export default Main