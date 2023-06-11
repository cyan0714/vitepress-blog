import request from './axios.js'

export const getQuotesByName = hero => {
  return request({
    url: '/quotes/all-quote',
    method: 'get',
    params: {
      hero,
    },
  })
}
