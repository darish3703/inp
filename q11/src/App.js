import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Page2 from './pages/Page2';
import Head from './pages/Head';

function App() {
  return (
    <div className="App">
      <Head/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/page2' element={<Page2/>}/>
      </Routes>
    </div>
  );
}

export default App;
