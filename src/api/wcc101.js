import request from '@/utils/request'

export function getTest(params) {
  return request({
    url: '/api/wcc101/test',
    method: 'get',
    params
  })
}
