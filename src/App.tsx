import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import routes from './route'
const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, i) => (
          <Route key={i} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  )
}

export default App
