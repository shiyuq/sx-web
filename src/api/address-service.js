import {createInstance} from './general'
import config from '../config/api-config'

const baseUrl = config.customerService

const getAddressList = async () => {
  const { data } = await createInstance(baseUrl).post('/address/list')
  return data
}

module.exports = {
  getAddressList
}
