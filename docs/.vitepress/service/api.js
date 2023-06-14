import request from './axios.js'

export const getRandomQuote = () => {
  return request({
    url: '/quotes/one-quote',
    method: 'get',
  })
}

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
