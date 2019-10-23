import React from 'react'

import { Container } from '../styles'
import Header from '../Common/header'
import Table from '../Common/table'
import { 
    GetAllStores,
    AddStore,
    UpdateStore,
    DeleteStore 
} from 'Api/api-stores'

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
                onAdd={[AddStore, setStoreAdded]}
                onUpdate={[UpdateStore, setStoreUpdated]}
                onDelete={[DeleteStore, setStoreDeleted]}
                columns={columns}
            />
        </Container>
    )
}

export default Stores