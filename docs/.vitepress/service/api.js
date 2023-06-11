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

export const getPicturesByType = type => {
  return request({
    url: '/file/pictures',
    method: 'get',
    params: {
      type,
    },
  })
}
