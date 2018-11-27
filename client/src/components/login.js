import axios from 'axios'
const baseUrl = '/api/login'

const loginService = async (ctx) => {
    const res = await axios.post(baseUrl, ctx)
    return res.data
}

export default loginService