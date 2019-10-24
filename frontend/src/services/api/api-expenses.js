import { api } from './api'

const path = '/expenses'
export const InsertExpenses = async (expenses) => { 
    return await api.post(`${path}/insert`, { expenses })
}

export const GetExpenseDashboardData = async () => { 
    return await api.get(`${path}/dashboard`)
}