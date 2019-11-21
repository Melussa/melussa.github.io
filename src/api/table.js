import request from '@/utils/request'

export function getList(url, params) {
  return request({
    url,
    method: 'get',
    params
  })
}
