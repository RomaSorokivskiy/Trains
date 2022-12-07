import axios from "axios";

export const API_URL = "http://localhost:3002"

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})
export const getTickets = async () => {
    const response = await $api('/api/tickets')
    return response.data.tickets
}

export default $api;