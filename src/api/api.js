//处理异步
import apiConfig from './api_config'

import axios from 'axios'

axios.defaults.withCredentials = true

const obj = {}

for (const i in apiConfig) {

  const config = apiConfig[i]

  obj[i] = (params) => {

    return new Promise((resolve, reject) => {

      const opt = {

        method: config.method || 'get',

        url: config.url

      }

      if (config.method === 'post') {

        opt.data = params

      } else {

        opt.params = params

      }

      axios(opt).then(res => {

        if (res.data.code === 1) {

          resolve(res.data)

        } else {

          console.log(res.data.msg)

          reject(res.data)

        }

      }).catch(error => {

        console.log(error)

      })

    })

  }

}

export default obj

