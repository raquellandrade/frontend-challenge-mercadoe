import axios from 'axios'
import { ref } from 'vue'

export const dataHeader = ref({})
export const dataSupplier = ref({})
export const dataAddresses = ref([])

// Determine the base URL based on environment
const getBaseUrl = () => {
  // In development, use the Vite proxy
  if (import.meta.env.DEV) {
    return '/api'
  }
  // In production, use our Vercel proxy function
  return '/api/proxy'
}

export async function getApi() {
  try {
    const baseUrl = getBaseUrl()

    // In development, use the direct path
    if (import.meta.env.DEV) {
      const response = await axios.get(`${baseUrl}/orders/1`)
      return response
    }

    // In production, use the proxy with path as query parameter
    const response = await axios.get(`${baseUrl}?path=orders/1`)
    return response
  } catch (error) {
    console.error('Erro na requisição da API:', error)
    throw error
  }
}

export const responseApiHeader = getApi().then((res) => {
  try {
    dataHeader.value = res.data.header
    return
  } catch (e) {
    console.log(e, 'Erro request API Header')
  }
})

export const responseApiSupplier = getApi().then((res) => {
  try {
    dataSupplier.value = res.data.supplier
    return
  } catch (e) {
    console.log(e, 'Erro request API Supplier')
  }
})

export const responseApiAddresses = getApi().then((res) => {
  try {
    dataAddresses.value = res.data.addresses
    return
  } catch (e) {
    console.log(e, 'Erro request API Addresses')
  }
})
