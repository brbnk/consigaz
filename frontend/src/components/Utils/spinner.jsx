import React from 'react'
import { css } from '@emotion/core'

import RingLoader from 'react-spinners/RingLoader'

const override = css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 100%;
    left: 50%;
    transform: translate(-2%, -55%);  
    border-color: red;
`;

function LoadSpinner() { 
    return ( 
        <RingLoader
            css={override}
            sizeUnit={"px"}
            size={50}
            color={'#00d8ff'}
        />
    )
}

export default LoadSpinner