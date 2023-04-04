import logo from './logo.svg';
import './App.css';
import Nav from './components/0403/Nav';
import Profile from './components/0403/Profile';
import Board from './components/0403/Board';
import { Route, Routes } from 'react-router-dom';
import Header from './components/0403/Header';
import NotFound from './components/0403/NotFound';
import BoardDetail from './components/0403/BoardDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:boardId" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
