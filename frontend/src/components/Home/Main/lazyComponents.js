import { lazy } from 'react'

const timeToLoadComponent = 300
export const Dashboard = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import('./Dashboard/dashboard'),
        new Promise(resolve => setTimeout(resolve, timeToLoadComponent))
    ])
    return moduleExports
})

export const Reports = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import('./Reports/reports'),
        new Promise(resolve => setTimeout(resolve, timeToLoadComponent))
    ])
    return moduleExports
})

export const Users = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import('./Users/users'),
        new Promise(resolve => setTimeout(resolve, timeToLoadComponent))
    ])
    return moduleExports
})

export const Stores = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import('./Stores/stores'),
        new Promise(resolve => setTimeout(resolve, timeToLoadComponent))
    ])
    return moduleExports
})

export const Management = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import('./Management/management'),
        new Promise(resolve => setTimeout(resolve, timeToLoadComponent))
    ])
    return moduleExports
})

export const Employees = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import('./Employees/employees'),
        new Promise(resolve => setTimeout(resolve, timeToLoadComponent))
    ])
    return moduleExports
})