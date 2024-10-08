import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';

function App() {
  return (
    <>
      <Router basename='/react-cookbook'>
        <Header />
        <main className='container content'>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/category/:name' Component={Category} />
            <Route path='/meal/:id' Component={Recipe} />
            <Route Component={NotFound} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
