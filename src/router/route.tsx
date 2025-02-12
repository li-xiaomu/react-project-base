import Task from 'views/task' // 根组件
import Home from '@/views/home' // 首页组件
import Main from 'views/main' // 关于我们页面组件
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons'

export const SonRoute = [
  {
    path: '/main',
    element: <Main />,
    key: '/main',
    icon: <UserOutlined />,
    label: '首页',
  },
  {
    path: '',
    key: '',
    icon: <VideoCameraOutlined />,
    label: '同步管理',
    children: [
      {
        path: 'task',
        element: <Task />,
        key: '/task',
        icon: <UserOutlined />,
        label: '任务管理',
      },
    ],
  },
]

export const Route = [
  {
    path: '/',
    redirect: '/main',
    element: <Home />,
    children: SonRoute,
  },
]
