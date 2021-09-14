import Banner from './components/banner'
import Search from './components/search'
import Difference from './components/difference'
import Innovation from './components/innovation'
import About from './components/about'
import Company from './components/company'
import Product from './components/product'
import Information from './components/information'
import News from './components/news'
import Link from './components/link'

import addressService from '../../api/address-service'
export default {
  name: 'Home',
  components: {
    Banner,
    Search,
    Difference,
    Innovation,
    About,
    Company,
    Product,
    Information,
    News,
    Link
  },
  data() {
    return {
      addresses: []
    }
  },
  async created () {
    const [ addresses ] = await Promise.all([
      addressService.getAddressList()
    ])
    this.addresses = addresses.data
  }
}
