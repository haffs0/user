import React from 'react'
import '../App.css'
import {
    Form,
    Input,
    DatePicker,
    Button,
    Layout
} from 'antd';

const { Content, Footer } = Layout;

const UserForm = ({obj}) => {
    const {handleFirstName, handleLastName, handleBirthday, handleAge, handleHobby,handleSubmit,
    firstName, lastName, age, hobby} = obj

    return (
        <Layout>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <div className="mar" style={{ background: '#fff', padding: 24, minHeight: 380, width: 500, }}><h1>UserForm</h1>
                    <Form className="form" onSubmit={handleSubmit}>
                        <Form.Item label="First Name">
                            <Input value={firstName} onChange={handleFirstName}/>
                        </Form.Item>
                        <Form.Item label="Last Name">
                            <Input value={lastName} onChange={handleLastName} />
                        </Form.Item>
                        <Form.Item label="DatePicker">
                            <DatePicker onChange={handleBirthday} />
                        </Form.Item>
                        <Form.Item label="Age">
                            <Input value={age} onChange={handleAge}/>
                        </Form.Item>
                        <Form.Item label="Hobby">
                            <Input value={hobby} onChange={handleHobby} />
                        </Form.Item>
                        <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Haffs Design ©2019 Created by haffs</Footer>
        </Layout>
    )
}

export default UserForm