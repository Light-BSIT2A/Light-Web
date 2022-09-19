import './index.css';
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
function App() {
    return (
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
                    <Route path='/404' element={<PageNotFound/>}/>
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
            </Header>
        </BrowserRouter>
    );
}

export default App;