import News from '@/views/news'; // 根组件
import Home from '@/views/home'; // 首页组件
import About from '@/views/about'; // 关于我们页面组件
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

export const SonRoute = [
  {
    path: '/about',
    element: <About />,
    key: '/about',
    icon: <UserOutlined />,
    label: '关于我们',
  },
  {
    path: '',
    key: '',
    icon: <VideoCameraOutlined />,
    label: '新闻列表',
    children: [
      {
        path: 'new2',
        element: <News />,
        key: '/new2',
        icon: <UserOutlined />,
        label: '新闻报告',
      },
    ],
  },
];

export const Route = [
  {
    path: '/',
    element: <Home />,
    children: SonRoute,
  },
];
