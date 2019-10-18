import React from 'react'

import { Container } from '../styles'
import Header from '../Common/header'
import Table from '../Common/table'
import { 
    GetAllStores 
} from '../../../../services/api-stores'

const columns = [
    { title: 'Cidade', field: 'city' },
    { title: 'Endereço', field: 'address' },
    { title: 'Telefone', field: 'tel' }
]

function Stores() {
    const [data, setData] = React.useState([])
    const [storeAdded, setStoreAdded] = React.useState('')
    const [storeDeleted, setStoreDeleted] = React.useState({})
    const [storeUpdated, setStoreUpdated] = React.useState({})

    React.useEffect(() => { 
        (async function() {
            GetAllStores(setData)
        })()
    }, [storeAdded, storeDeleted, storeUpdated])

    return(
        <Container> 
            <Header title='Lojas' /> 
            <Table 
                data={data} 
                onAdd={[null, setStoreAdded]}
                onUpdate={[null, setStoreUpdated]}
                onDelete={[null, setStoreDeleted]}
                columns={columns}
            />
        </Container>
    )
}

export default Stores