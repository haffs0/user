import React, { useState } from 'react'
import {Redirect } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { createUser } from '../actions/'
import '../App.css'
import {
    Form,
    Input,
    DatePicker,
    Button,
    Layout
} from 'antd';

const { Content, Footer } = Layout;

const UserForm = () => {
    const data = useSelector(state => state.userInfo)
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [age, setAge] = useState("")
    const [hobby, setHobby] = useState("")
    const [redirect, setRedirect] = useState(false)
        
    const handleFirstName = (event) => {
        setRedirect(false)
        console.log(event.target.value)
        setFirstName(event.target.value)
    }

    const handleLastName = (event) => {
        setLastName(event.target.value)
    }

    const handleBirthday = (event) => {
        const day = String(event._d)
        setBirthday(day.substring(4,16))
    }

    const handleAge = (event) => {
        setAge(event.target.value)
    }

    const handleHobby = (event) => {
        setHobby(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newObject = {
            key: data.length + 1,
            firstName: firstName,
            lastName: lastName,
            birthday: birthday,
            age: age,
            hobby: hobby
        }
        console.log(newObject)
        dispatch(createUser(newObject))
        setTimeout(() => {
            setFirstName("")
            setLastName("")
            setBirthday("")
            setAge("")
            setHobby("")
            setRedirect(true)
        }, 500)
        
    }
   
    return (
        <Layout>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <div className="mar" style={{ background: '#fff', padding: 24, minHeight: 380, width: 500, }}><h1>UserForm</h1>
                    <Form className="form" onSubmit={handleSubmit}>
                        <Form.Item label="First Name">
                            <Input onChange={handleFirstName}/>
                        </Form.Item>
                        <Form.Item label="Last Name">
                            <Input onChange={handleLastName} />
                        </Form.Item>
                        <Form.Item label="DatePicker">
                            <DatePicker onChange={handleBirthday} />
                        </Form.Item>
                        <Form.Item label="Age">
                            <Input onChange={handleAge}/>
                        </Form.Item>
                        <Form.Item label="Hobby">
                            <Input onChange={handleHobby} />
                        </Form.Item>
                        <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                        </Form.Item>
                    </Form>
                    {redirect ? <Redirect to="/"/>: ""}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Haffs Design ©2019 Created by haffs</Footer>
        </Layout>
    )
}

export default UserForm