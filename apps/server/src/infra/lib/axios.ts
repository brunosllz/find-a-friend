import axios from 'axios'

const brazilApi = axios.create({
  baseURL: 'https://brasilapi.com.br/api',
})

export { brazilApi }
