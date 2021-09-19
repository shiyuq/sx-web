import { createInstance } from './general'
import config from '../config/api-config'

const baseUrl = config.customerService

const getTrainList = async() => {
  const { data } = await createInstance(baseUrl).post('/train/list')
  return data
}


export default {
  getTrainList
}
