/*
 * @Date: 2023-03-17 23:37:03
 * @LastEditTime: 2023-03-23 14:48:47
 */
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const items = [
    {
      label: '修改密码',
      key: '/password'
    },
    {
      label: '列车管理',
      key: '/trains'
    },
    {
      label: '车次管理',
      key: '/departure'
    }
  ]
  const navigate = useNavigate()
  return <div className='home'>
    <Menu
      items={items}
      onClick={({ key }) => navigate(key)}
    >
    </Menu>
  </div>
}