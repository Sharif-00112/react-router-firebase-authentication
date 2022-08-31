// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../src/components/Header/Header';
import Home from '../src/components/Home/Home';
import NotFound from '../src/components/NotFound/NotFound';
import Footer from '../src/components/Footer/Footer';
import About from '../src/components/About/About';
import Contact from '../src/components/Contact/Contact';
import Login from '../src/components/Login/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path = '/' element = {<Home></Home>}> </Route>
          <Route exact path = '/home' element = {<Home></Home>}> </Route>
          <Route exact path = '/about' element = {<About></About>}> </Route>
          <Route exact path = '/contact' element = {<Contact></Contact>}> </Route>
          <Route exact path = '/login' element = {<Login></Login>}> </Route>
          <Route exact path = '*' element = {<NotFound></NotFound>}> </Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
