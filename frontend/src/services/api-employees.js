import { api } from './api'

export const GetAllEmployees = async (setData) => { 
    return await api.get('/employees/all')
        .then(({ data }) => { 
            setData(data.employees)
        })
        .catch(err => {
            console.log(err)
        })
}