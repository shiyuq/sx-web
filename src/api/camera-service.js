import {createInstance} from './general'
import config from '../config/api-config'

const baseUrl = config.customerService

const getCameraList = async(params) => {
  const { data } = await createInstance(baseUrl).post('/camera/list', params)
  return data
}

export default {
  getCameraList
}
