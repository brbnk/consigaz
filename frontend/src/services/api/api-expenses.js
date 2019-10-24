import { api } from './api'

export const InsertExpenses = async (expenses) => { 
    return await api.post('/expenses/insert', { expenses })
}