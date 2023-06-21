import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Quiz from './pages/Quiz/Quiz';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import { Container } from '@mui/material';

function App() {
  return (
    <Container>

    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/signup' element={<Signup/>}></Route>
        <Route exact path='/signin' element={<Signin/>}></Route>
        <Route exact path='/quiz' element={<Quiz/>}></Route>
        <Route exact path='/leaderboard' element={<Leaderboard/>}></Route>

      </Routes>
    </Router>
    </Container>
  );
}

export default App;
