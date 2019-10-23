import React from 'react'
import { Container } from '../styles'
import Header from '../Common/header'
import Table from '../Common/table'
import { GetStoresToMapLookup } from 'Api/api-stores'
import { 
    GetAllEmployees, 
    AddEmployee,
    UpdateEmployee,
    DeleteEmployee 
} from 'Api/api-employees'

function Employees() {
    const columns = [
        { title: 'Nome', field: 'name' },
        { title: 'Celular', field: 'cellphone' },
        { title: 'Idade', field: 'age' },
        { title: 'Salário', field: 'salary.$numberDecimal', render: (data) => `R$ ${data.salary.$numberDecimal}`}
    ]

    const [lookup, setLookup] = React.useState({})
    const [data, setData] = React.useState([])
    const [employeeAdded, setEmployeeAdded] = React.useState('')
    const [employeeDeleted, setEmployeeDeleted] = React.useState({})
    const [employeeUpdated, setEmployeeUpdated] = React.useState({})

    React.useEffect(() => {
        (async () => { 
            const stores = await GetStoresToMapLookup()   
            const employees = await GetAllEmployees(setData)

            let lookup = stores.reduce((acc, val) => { 
                acc[val._id] = val.city
                return acc
            }, {})

            setLookup({ title: 'Loja', field: 'store._id', lookup })
        })()
    }, [employeeAdded, employeeDeleted, employeeUpdated])

    return(
        <Container> 
            <Header title='Funcionários' /> 
            <Table  
                data={data} 
                onAdd={[AddEmployee, setEmployeeAdded]}
                onUpdate={[UpdateEmployee, setEmployeeUpdated]}
                onDelete={[DeleteEmployee, setEmployeeDeleted]}
                columns={[...columns, lookup]}
            />
        </Container>
    )
}

export default Employees