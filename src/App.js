import './index.css';
import Header from './components/Header'
import PageNotFound from './components/PageNotFound';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Team from './pages/Team';
import Survey from './pages/Survey';
import Proposal from './pages/Proposal';
import Footer from './components/Footer';

export default function App() {
    return (
        <BrowserRouter>
            <Header>
                <Routes>
                    <Route path='/' element={<Dashboard/>}/>
                    <Route path='/team' element={<Team/>}/>
                    <Route path='/survey' element={<Survey/>}/>
                    <Route path='/proposal' element={<Proposal/>}/>
                    <Route path='/404' element={<PageNotFound/>}/>
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
            </Header>
            <Footer/>
        </BrowserRouter>
    );
}