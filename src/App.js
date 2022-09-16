import './index.css';
import Employees from './pages/Employees'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Calendar from './pages/Calendar'
import Dictionary from './pages/Dictionary'
import Definition from './pages/Definition';
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
                    <Route path='/dictionary' element={<Dictionary/>}/>
                    <Route path='/definition/:search' element={<Definition/>}/>
                    <Route path='/404' element={<PageNotFound/>}/>
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
            </Header>
        </BrowserRouter>
    );
}

export default App;