import HomePage from '../pages/homePage'
import Blogs from '../pages/Blogs'
import Essays from '../pages/Blogs'
const routes = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/Blogs',
    element: <Blogs />
  },
  {
    path: '/Essays',
    element: <Essays />
  }
]

export default routes
