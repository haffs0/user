import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import { Layout, Menu} from 'antd';

const { Header } = Layout;




const PageHeader = () => {
    return (
        <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to='/' >User Table</Link></Menu.Item>
            <Menu.Item key="2"> <Link to='/user/form' >User Form</Link></Menu.Item>
          </Menu>
        </Header>
      </Layout>
    )
}

export default PageHeader