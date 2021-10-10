import {createInstance} from './general'
import config from '../config/api-config'

const baseUrl = config.customerService

const getTeacherList = async(params) => {
  const { data } = await createInstance(baseUrl).post('/teacher/list', params)
  return data
}

export default {
  getTeacherList
}
