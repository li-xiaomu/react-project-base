import request from '@/utils/axios'
export const getListApi = (data: any) => {
  return request({
    url: '/api/api-www/global-elements/global-header/v1/flyouts',
    method: 'get',
    params: data,
  })
}
