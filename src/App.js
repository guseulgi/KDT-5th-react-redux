import React from 'react';
import GlobalStyle from './components/0405/GlobalStyle';
import { useSelector } from 'react-redux';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
// import logo from './logo.svg';
// import './App.css';
// import Nav from './components/0403/Nav';
// import Profile from './components/0403/Profile';
// import Board from './components/0403/Board';
// import { Route, Routes } from 'react-router-dom';
// import Header from './components/0403/Header';
// import NotFound from './components/0403/NotFound';
// import BoardDetail from './components/0403/BoardDetail';
// import Test from './components/0404/Test';
// import TodoList from './components/0404/TodoList';
// import ListContainer from './components/0404/ListContainer';

function App() {
  const isLogin = useSelector((state) => state.user.isLogin);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={isLogin ? <Main /> : <Login />} />
      </Routes>
    </>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <h1>리액트 라우터</h1>
//       <Routes>
//         <Route path="/" />
//         {/* <Route path="/board" element={<Board />} />
//         <Route path="/board/:boardId" element={<BoardDetail />} /> */}
//         <Route path="/todo" element={<ListContainer />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// }

export default App;
