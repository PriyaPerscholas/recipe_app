import Pages from './pages/Pages'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './App.css';
import Index from './components/Index';
import Show from './components/Show';
import New from './components/New';
import Edit from './components/Edit';
function App() {
  return (
    <><h1><i>Recipe World</i></h1>
      <br />
      <Router>
        <nav className='nav1'>
          <Link to='/' className='li1'>Recipes from API</Link>
          <Link to='/priyarecipes' className='li2' >Priya's Recipes</Link>
          <Link to='/new' className='li3'>Create new recipe</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route path="/priyarecipes" element={<Index />} />
          <Route path="/:id" element={<Show />} />
          <Route path='/new' element={<New />} />
          <Route path='/:id/edit' element={<Edit />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
