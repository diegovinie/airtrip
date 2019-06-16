import {api, urls} from './api'

export const posts = {
  getList: params => api.get(urls.posts, { params }),

  getOne: (id, params) => api.get(`${urls.posts}/${id}`, { params }),

  create: fields => api.post(`${urls.posts}`, fields),

  update: (id, fields) => api.put(`${urls.posts}/${id}`, fields),

  delete: (id, options) => api.delete(`${urls.posts}/${id}`)
}
