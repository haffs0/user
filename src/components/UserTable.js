import React from 'react'
import { useSelector } from 'react-redux'
import { Layout, Table} from 'antd';


const { Content, Footer } = Layout;

const UserTable = () => {
    const data = useSelector(state => state.userInfo)
    const columns = [
        {
          title: 'First Name',
          dataIndex: 'firstName',
          key: 'firstName',
        },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          key: 'lastName',
        },
        {
          title: 'Birthday',
          dataIndex: 'birthday',
          key: 'birthday',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Hobby',
          dataIndex: 'hobby',
          key: 'hobby',
        },
      ];

    return (
        <Layout>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                    <h1>UserTable</h1>
                    <Table columns={columns} dataSource={data} />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Haffs Design ©2019 Created by haffs</Footer>
        </Layout>
    )
}

export default UserTable