import React, { useState } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
// import { Button } from 'antd';
import '../App.css'
import PageHeader from './Header';
import UserTable from './UserTable';
import UserForm from './UserForm';


const App = () => {
    const [data, setData] = useState([{
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        birthday: 'Oct 2 2012',
        age: 32,
        hobby: 'foothball'
      },
      {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        birthday: 'Jun 4 2009',
        age: 42,
        hobby: 'baseball'
      }])
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [age, setAge] = useState("")
    const [hobby, setHobby] = useState("")
        
    const handleFirstName = (event) => {
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
        setData(data.concat(newObject))
        console.log(data)
        // console.log(document.getElementsByClassName('form').resetFields())
        // return <Link to='/'/>
    }
    const obj = {
        handleFirstName: handleFirstName,
        handleLastName: handleLastName,
        handleBirthday: handleBirthday,
        handleAge: handleAge,
        handleHobby: handleHobby,
        handleSubmit: handleSubmit,
        firstName: firstName,
        lastName: lastName,
        age: age,
        hobby: hobby
    }
    const handleUserForm = () => {
        return <UserForm obj={obj}/>
    }
    return(
        <div>
            <BrowserRouter>
                <div>
                    <PageHeader obj={obj}/>
                    <Route path="/" exact component={() => <UserTable data={data}/>}/>
                    <Route path="/user/form/" exact component={handleUserForm}/> 
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App