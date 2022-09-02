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
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Orders from './components/Orders/Orders';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <div className="App">
      
      {/* step-4-context */}
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route exact path = '/' element = {<Home></Home>}> </Route>
            <Route exact path = '/home' element = {<Home></Home>}> </Route>
            <Route exact path = '/about' element = {<About></About>}> </Route>
            <Route exact path = '/contact' element = {<Contact></Contact>}> </Route>
            <Route exact path = '/login' element = {<Login></Login>}> </Route>
            <Route exact path = '/register' element = {<Register></Register>}> </Route>
            <Route exact path = '/checkout' element = {
              <PrivateRoute>
                <Checkout></Checkout>
              </PrivateRoute>
            }> </Route>
            <Route exact path = '/orders' element = {
              <PrivateRoute>
                <Orders></Orders>
              </PrivateRoute>
            }> </Route>
            <Route exact path = '*' element = {<NotFound></NotFound>}> </Route>
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
