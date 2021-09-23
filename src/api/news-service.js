import {createInstance} from './general'
import config from '../config/api-config'

const baseUrl = config.customerService

const getNewsList = async(params) => {
  const { data } = await createInstance(baseUrl).post('/news/get', params)
  return data
}

export default {
  getNewsList
}
