import axios from 'axios'

const getToken = () => { 
    let token = localStorage.getItem('jwt')

    if (!token) { 
        return ''
    }

    return token
}

const token = getToken()

const api = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: { 'Authorization': `bearer ${token}`}
})

export default api