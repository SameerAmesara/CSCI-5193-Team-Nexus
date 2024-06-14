import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux'
import styles from "./index.css"



function App() {
    const dispatch = useDispatch()

    return (
    <>
        <Navbar/ >
        <Routes>
            <Route exact path='/' element={<Home />} />
        </Routes>
    </>
    )
  
}

export default App;
