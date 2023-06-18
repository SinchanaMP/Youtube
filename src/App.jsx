
import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
// import Categories from './components/categories';
// import  Banner from './components/Banner';
import AddVideo from './components/addVideo';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
 // eslint-disable-next-line no-unused-vars
 import PageNotFound from './components/pageNotFound';

function App(){
    return (
        <div className="App">
            <BrowserRouter>
            <Navbar />
          <Routes>
            <Route  element={<Home />} path='/'  />
            <Route element={<AddVideo />} path='/add-video' />
            <Route element={<PageNotFound />} path='*'/>
          </Routes>

          </BrowserRouter>
    
        </div>
    );
}
export default App;
