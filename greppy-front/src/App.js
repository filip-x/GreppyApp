import './App.css';
import Home from './components/Home/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EditUser from './components/EditUser/EditUser'
import CreateUser from './components/CreateUser/CreateUser'

function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/create" element={<CreateUser />} />
                    <Route path="/edit/:id" element={<EditUser />} />
                    <Route path="/" element={<Home />} />
                </Routes>
        </BrowserRouter>
    )
}
export default App;
