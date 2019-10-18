import { api } from './api'

export const GetAllUsers = async (setData) => { 
    return await api.get('/users/all')
        .then(({ data }) => { 
            setData(data.users)
        })
        .catch(err => {
            console.log(err)
        })
}

export const AddUser = async ({ email }, onAdd) => {
    return await api.post('/users/insert', { email })
        .then(_ => onAdd(email))
}

export const UpdateUser = async (newData, oldData, onUpdate) => { 
    const { _id } = oldData
    const { photo, name, email } = newData
    const changes = { ...oldData, name, photo, email }
    
    return await api.put(`/users/update/${_id}`, changes)
        .then(res => onUpdate(res.message))
}

export const DeleteUser = async ({ _id }) => { 
    return await api.delete(`/users/delete/${_id}`)
        .then(res => onDelete(res.message))
}