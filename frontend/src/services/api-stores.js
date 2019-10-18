import { api } from './api'

export const GetAllStores = async (setData) => { 
    return await api.get('/stores/show')
        .then(({ data }) => { 
            setData(data.stores)
        })
        .catch(err => {
            console.log(err)
        })
}