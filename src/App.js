import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Containers/Home/Home'
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>

          <Route path="/" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
