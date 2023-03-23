/*
 * @Date: 2023-03-17 23:06:40
 * @LastEditTime: 2023-03-23 14:44:49
 */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from './routes'

export default function MyRouter() {
  return <div>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} /> */}
        {routes.map((item) =>
          <Route
            key={item.path}
            path={item.path}
            element={item.element}
          >
            {
              !item.children ? '' :
                item.children.map((child) => <Route
                  key={child.path}
                  path={child.path}
                  element={child.element}
                />)
            }
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  </div>
}