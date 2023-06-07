import ReactDOM from 'react-dom';
import { useLocation } from 'react-router-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './pages/Home';
import GraphicNov from './pages/GraphicNov';
import Shop from './pages/Shop';
import GameInfo from './pages/GameInfo';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


const AppLayout = () => {
  const location = useLocation();
  const isSignInPage = location.pathname === '/signin';
  const isSignUpPage = location.pathname === '/signup'
  

  return (
    <>
      <Navbar showLinks={!isSignInPage && !isSignUpPage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graphicnovels" element={<GraphicNov />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/gameinfo" element={<GameInfo />} />
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </>
  );
};

ReactDOM.render(
  <Router basename='/frogman-ecommerce-react'>
    <AppLayout />
  </Router>,
  document.getElementById('root')
);
