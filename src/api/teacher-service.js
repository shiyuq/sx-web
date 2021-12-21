import {createInstance} from './general'
import config from '../config/api-config'

const baseUrl = config.customerService

const getTeacherList = async (params) => {
  const { data } = await createInstance(baseUrl).post('/teacher/get-teacher-list', params)
  return data
}

const getTeacherDetail = async (params) => {
  const { data } = await createInstance(baseUrl).post('/teacher/detail', params)
  return data
}

export default {
  getTeacherList,
  getTeacherDetail
}
