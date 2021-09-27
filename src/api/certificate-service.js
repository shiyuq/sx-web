import {createInstance} from './general'
import config from '../config/api-config'

const baseUrl = config.customerService

const getCertificateList = async(params) => {
  const { data } = await createInstance(baseUrl).post('/certificate/list', params)
  return data
}

export default {
  getCertificateList
}
