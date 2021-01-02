import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

import './layout.scss';

const PageLayout = ({ children }) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[ '1' ]}>
          <Menu.Item key="1">Home</Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout-container">
        <div className="site-layout-content">
          {children}
        </div>
      </Content>
    </Layout>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;
