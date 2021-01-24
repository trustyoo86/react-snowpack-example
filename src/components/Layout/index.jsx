import PropTypes from 'prop-types';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

import styles from './layout.module.css';

const PageLayout = ({ children }) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[ '1' ]}>
          <Menu.Item key="1">Home</Menu.Item>
        </Menu>
      </Header>
      <Content className={styles.container}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.content}>
          {children}
        </div>
      </Content>
      <Footer>
        github recoil test
      </Footer>
    </Layout>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;
