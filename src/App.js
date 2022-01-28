import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Containers/Login/Login'
import Posts from './Containers/Posts/Posts'
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          
        <Route path="/" element={<Login />} />
        <Route path="/posts" element={<Posts />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
