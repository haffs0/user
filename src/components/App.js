import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect} from 'react-router-dom'
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
        setData(data.concat(newObject))
        console.log(data)
        setTimeout(() => {
            setFirstName("")
            setLastName("")
            setBirthday("")
            setAge("")
            setHobby("")
            setRedirect(true)
        }, 500)
        
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
    return(
        <div>
            <BrowserRouter>
                <div>
                    <PageHeader/>
                    <Route path="/" exact render={() => <UserTable data={data}/>}/>
                    <Route path="/user/form/" exact render={() => <UserForm obj={obj}/>}/> 
                    {redirect ? <Redirect to="/"/>: ""}
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App