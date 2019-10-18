import React from 'react'
import { Container } from '../styles'
import Header from '../Common/header'
import Table from '../Common/table'
import { api } from '../../../../services/api'
import { GetAllStores } from '../../../../services/api-stores'
import { GetAllEmployees } from '../../../../services/api-employees'

function Employees() {
    const [columns, setColumns] = React.useState([
        { title: 'Nome', field: 'name' },
        { title: 'Celular', field: 'cellphone' },
        { title: 'Idade', field: 'age' },
        { title: 'Salário', field: 'salary.$numberDecimal', render: (data) => `R$ ${data.salary.$numberDecimal}`}
    ])
    const [data, setData] = React.useState([])
    const [employeeAdded, setEmployeeAdded] = React.useState('')
    const [employeeDeleted, setEmployeeDeleted] = React.useState({})
    const [employeeUpdated, setEmployeeUpdated] = React.useState({})

    React.useEffect(() => {
        (async () => { 
            const stores = GetAllStores()      
            const employees = GetAllEmployees(setData)

            let lookup = stores.data.stores.reduce((acc, val) => { 
                acc[val._id] = val.city
                return acc
            }, {})

            setColumns([...columns, { title: 'Loja', field: 'store._id', lookup }])
        })()
    }, [employeeAdded, employeeDeleted, employeeUpdated])

    return(
        <Container> 
            <Header title='Funcionários' /> 
            <Table  
                data={data} 
                onAdd={[null, setEmployeeAdded]}
                onUpdate={[null, setEmployeeUpdated]}
                onDelete={[null, setEmployeeDeleted]}
                columns={columns}
            />
        </Container>
    )
}

export default Employees