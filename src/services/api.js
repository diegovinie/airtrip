const host = 'http://localhost:4040'

export const urls = {
  host,
  base: host + '/api',
  posts: 'posts',
  users: 'users',
  images: 'images'
}

export const headers = {
  'Content-Type': 'application/json'
}

const baseFetch = method => (url, data, {
  mode = 'cors',
  cache = 'default',
  credentials = 'same-origin',
  redirect = 'follow',
  referrer = 'no-referrer'
}) =>
  fetch(`${urls.base}/${url}`, {
    method,
    mode,
    cache,
    credentials,
    headers,
    redirect,
    referrer,
    body: data && JSON.stringify(data)
  })
  .then(res => res.json())

export const api = {
  get: (url, options) => baseFetch ('get') (url, null, options || {}),

  post: (url, data, options) => baseFetch ('post') (url, data, options),

  put: (url, data, options) => baseFetch ('put') (url, data, options),

  delete: (url, options) => baseFetch ('delete') (url, null, options),

  headers: {
    add: (key, value) => { headers[key] = value },

    remove: key  => { delete headers[key] }
  }
}
