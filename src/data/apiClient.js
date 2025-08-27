import axios from 'axios'
import { ref } from 'vue'

export const dataHeader = ref({})
export const dataSupplier = ref({})
export const dataAddresses = ref([])

export async function getApi() {
  try {
    const response = await axios.get('/api/orders/1')
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
