import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import '../App.css'
import PageHeader from './Header';
import UserTable from './UserTable';
import UserForm from './UserForm';



const App = () => {
    
    return(
        <div>
            <BrowserRouter>
                <div>
                    <PageHeader/>
                    <Route path="/" exact render={() => <UserTable/>}/>
                    <Route path="/user/form/" exact render={() => <UserForm />}/> 
                    
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App