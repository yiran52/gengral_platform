// some-component.tsx
import instance from './generalConfig' // import the axios instance
import Plugin = API.Bolgs
//createBlogs
export const _createBlog = (data: Plugin.CreateBolgs) => {
  return instance
    .post('/createBlogs', data)
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
}

export const _fetchBlogs = (params: PaginatedPage) => {
  return instance.get('/getBlogs', { params: params })
}
