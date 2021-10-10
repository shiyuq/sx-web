import { createInstance } from './general'
import config from '../config/api-config'

const baseUrl = config.customerService

const getTrainList = async () => {
  const { data } = await createInstance(baseUrl).post('/train/list')
  return data
}

const getRecmdTrain = async () => {
  const { data } = await createInstance(baseUrl).post('/train/get-recmd-train')
  return data
}

const getTrainDetail = async (params) => {
  const { data } = await createInstance(baseUrl).post('/train/get', params)
  return data
}

export default {
  getTrainList,
  getRecmdTrain,
  getTrainDetail
}
