import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.covid19api.com',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getCountries() {
        return apiClient.get('/summary')
    }
}