import axios from 'axios'

export async function getApi() {
  try {
    // Using Vite proxy to avoid CORS issues
    const response = await axios.get('/api/orders/1')
    return response
  } catch (error) {
    console.error('Erro na requisição da API:', error)
    throw error
  }
}
