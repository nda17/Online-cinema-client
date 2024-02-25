
import axios from 'axios'
import { API_URL } from '../configs/api.config'

//Requests with authorization:

//Requests without authorization:
export const axiosWithoutAuth = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})