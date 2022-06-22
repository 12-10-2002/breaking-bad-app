import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Character } from './pages/Character';
import { Home } from './pages/Home';


import './global.scss';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path="character/:id" element={<Character />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
