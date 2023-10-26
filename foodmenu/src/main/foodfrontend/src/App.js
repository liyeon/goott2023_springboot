import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ListComponent from './components/List';
import InsertComponent from './components/Insert';

function App() {
  return (
    <div>
      <Router>
        <Header/>
          <Routes>
            <Route path='/' element={<ListComponent/>}></Route>
            <Route path='/insert' element={<InsertComponent/>}></Route>
            <Route path='/update/:id' element={<InsertComponent/>}></Route>
          </Routes>    
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
