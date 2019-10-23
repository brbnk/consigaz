import { api } from './api'

const path = '/stores'

export const GetAllStores = async (setData) => { 
    return await api.get(`${path}/show`)
        .then(({ data }) => { 
            setData(data.stores)
        })
        .catch(err => {
            console.log(err)
        })
}

export const GetStoresToMapLookup = async () => { 
    return await api.get(`${path}/show`)
        .then(({ data }) => { 
            return data.stores
        })
        .catch(err => {
            console.log(err)
        })
}

export const AddStore = async (data, onAdd) => { 
    return await api.post(`${path}/insert`, data)
        .then(res => onAdd('Store Created!'))
}

export const UpdateStore = async (oldData, newData, onUpdate) => { 
    const { _id } = oldData
    const changes = { ...oldData, newData }
    
    return await api.put(`${path}/update/${_id}`, changes)
        .then(res => onUpdate(res))
}

export const DeleteStore = async ({ _id }, onDelete) => { 
    return await api.delete(`${path}/remove/${_id}`)
        .then(res => onDelete(res))
}