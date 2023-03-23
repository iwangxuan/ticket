/*
 * @Date: 2023-03-17 23:44:21
 * @LastEditTime: 2023-03-23 14:42:41
 */

import Home from '../pages/Home.js'
import Login from '../pages/Login'
import Trains from '../pages/Trains'

const routes = [
  {
    path: '/login',
    element: <Login />
  },

  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/trains',
        element: <Trains />
      },
    ]
  },
]

export default routes