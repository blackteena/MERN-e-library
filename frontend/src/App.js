import './App.css'
import Header from './components/Header'
import {Route,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddBookPage from './pages/AddBookPage'
import BooksPage from './pages/BooksPage'
import UpdateBookPage from './pages/UpdateBookPage'


function App() {
  return ( 
    <div className="App">
      <Header/>   
      <main>
        <Routes>  
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/add' element={<AddBookPage/>}></Route>
          <Route path='/books' element={<BooksPage/>}></Route>
          <Route path='/books/:id' element={<UpdateBookPage/>}></Route>   
        </Routes>  
      </main>
    </div>
  );
}

export default App;
