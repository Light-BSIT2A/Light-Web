import './index.css';
import Header from './components/Header'
import PageNotFound from './components/PageNotFound';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Team from './pages/Team';
import Games from './pages/Games';
import Footer from './components/Footer';

export default function App() {
    return (
        <BrowserRouter>
            <Header>
                <Routes>
                    <Route path='/' element={<Dashboard/>}/>
                    <Route path='/team' element={<Team/>}/>
                    <Route path='/games' element={<Games/>}/>
                    <Route path='/404' element={<PageNotFound/>}/>
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
            </Header>
            <Footer/>
        </BrowserRouter>
    );
}