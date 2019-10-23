import { api } from './api'

const path = '/employees'

export const GetAllEmployees = async (setData) => { 
    return await api.get(`${path}/all`)
        .then(({ data }) => { 
            setData(data.employees)
        })
        .catch(err => {
            console.log(err)
        })
}

export const GetAllEmployeesToMap = async () => { 
    return await api.get(`${path}/all`)
        .then(({ data }) => data)
        .catch(err => console(err))
}

export const AddEmployee = async (data, onAdd) => { 
    return await api.post(`${path}/insert`, data)
        .then(res => onAdd(`Employee added ${data._id}`))
}

export const UpdateEmployee = async (oldData, newData, onUpdate) => { 
    const { _id } = oldData
    const changes = { ...oldData, newData }
    
    return await api.put(`${path}/update/${_id}`, changes)
        .then(res => onUpdate(res))
}

export const DeleteEmployee = async ({ _id }, onDelete) => { 
    return await api.delete(w`${path}/remove/${_id}`)
        .then(res => onDelete(res))
}