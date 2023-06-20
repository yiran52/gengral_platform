import { type } from 'os'

declare global {
  // interfaces that return such kind of data always have a 2xx status code
  // and the data is wrapped in a { code: number, data: T, message: string } object.
  // for those responses that do not have a data field, the type of T is never.
  type WrappedData<T> = {
    code: number
    data: T
    message: string
  }

  // 分页数据
  type PaginatedData<T> = {
    total: number
    list: T[]
  }
  type PaginatedPage = {
    page_no: number
    pageSize: number
  }

  namespace API.Bolgs {
    type CreateBolgs = {
      title: string
      description: string
      content: string
    }
  }
  namespace API.Essays {
    type CreateBolgs = {
      title: string
      description: string
      content: string
    }
  }
}

export {}
