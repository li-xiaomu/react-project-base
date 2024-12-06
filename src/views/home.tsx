import React, { useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme, MenuProps } from 'antd';
import { Outlet } from 'react-router-dom';
import { SonRoute } from '@/router/route';

const { Header, Sider, Content } = Layout;

function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  const query: any = createSearchParams({
    id: '1',
  });
  const onMenu: MenuProps['onClick'] = (e) => {
    const keyPath = e.keyPath;
    const path = keyPath.reverse().join('');
    navigate(`${path}?${query}`);
  };
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          onClick={onMenu}
          defaultSelectedKeys={['1']}
          items={SonRoute}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
}
<style lang="less">.demo-logo-vertical {}</style>;
export default Home;
