
import { Route, Routes } from 'react-router-dom';
import { Header } from "./layouts/header";
import { PageAbout } from './pages/about/about';
import { PageHome } from './pages/home/home';



function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<PageHome />} />
                <Route path='/about' element={<PageAbout />} />
            </Routes>
        </>
    );
}

export default App;

