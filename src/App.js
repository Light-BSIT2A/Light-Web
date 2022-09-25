import './index.css';
import { createContext, useEffect, useState } from 'react';
import Employees from './pages/Employees'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Calendar from './pages/Calendar'
import Dictionary from './pages/Dictionary'
import Definition from './pages/Definition';
import Customers from './pages/Customers';
import Customer from './pages/Customer';
import Header from './components/Header'
import PageNotFound from './components/PageNotFound';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import { baseUrl } from './shared';

export const LoginContext = createContext();

function App() {
    useEffect(()=>{
        function refreshToken(){
            if (localStorage.refresh){
                const url = baseUrl + 'api/token/refresh/';
                fetch(url, {
                    method:'POST',
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({
                        refresh: localStorage.refresh,
                    }),
                })
                    .then((response)=>{
                    return response.json();
                    })
                    .then((data)=>{
                        localStorage.access = data.access;
                        localStorage.refresh = data.refresh;
                        setLoggedIn(true);
                    });
            }
        }
        const loopTime = 1000 * 60 * 14 //1000 milliseconds/second times 60 seconds/minute times 14 minutes
        refreshToken();
        setInterval(refreshToken, loopTime);
    }, []);
    const [loggedIn, setLoggedIn] = useState(localStorage.access ? true : false);
    function changeLoggedIn(value){
        setLoggedIn(value);
        if (!value){
            localStorage.clear()
        }
    }
    return (
        <LoginContext.Provider value={[loggedIn, changeLoggedIn]}>
            <BrowserRouter>
                <Header>
                    <Routes>
                        <Route path='/employees' element={<Employees/>}/>
                        <Route path='/' element={<Dashboard/>}/>
                        <Route path='/projects' element={<Projects/>}/>
                        <Route path='/calendar' element={<Calendar/>}/>
                        <Route path='/customer' element={<Customers/>}/>
                        <Route path='/customer/:id' element={<Customer/>}/>
                        <Route path='/dictionary' element={<Dictionary/>}/>
                        <Route path='/dictionary/:search' element={<Definition/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/404' element={<PageNotFound/>}/>
                        <Route path='*' element={<PageNotFound/>}/>
                    </Routes>
                </Header>
            </BrowserRouter>
        </LoginContext.Provider>
    );
}

export default App;