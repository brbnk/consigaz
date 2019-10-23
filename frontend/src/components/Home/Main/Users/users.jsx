import React, { useState } from 'react'
import Table from '../Common/table'
import Header from '../Common/header'
import { Container } from '../styles'

import { 
    AddUser, 
    UpdateUser, 
    DeleteUser, 
    GetAllUsers 
} from 'Api/api-users'


const columns = [
    { 
        title: 'Avatar', 
        field: 'photo', 
        render: data => <img src={data.photo} style={{ width: 50, height: 50, borderRadius: '100%'}} />
    }, 
    { title: 'Nome', field: 'name' },
    { title: 'Email', field: 'email' },
    { title: 'Criado', field: 'createdAt', render: data => new Date(data.createdAt).toLocaleDateString() },
]

function Users() { 
    const [data, setData] = useState([])
    const [userAdded, setUserAdded] = useState('')
    const [userDeleted, setUserDeleted] = useState({})
    const [userUpdated, setUpdateUser] = useState({})

    React.useEffect(() => { 
        (async function() {
            GetAllUsers(setData)
        })()
    }, [userAdded, userDeleted, userUpdated])

    return (
        <Container> 
            <Header title='Usuários do Sistema'/> 
            <Table 
                data={data} 
                onAdd={[ AddUser, setUserAdded ]}
                onUpdate={[ UpdateUser, setUpdateUser ]}
                onDelete={[ DeleteUser, setUserDeleted ]}
                columns={columns}
            />
        </Container>
    )
}

export default Users