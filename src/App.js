import React from 'react';
import Start from './pages/Start';
import styled from 'styled-components';
import GlobalStyle from './components/0405/GlobalStyle';
import { useSelector } from 'react-redux';
import Mbti from './pages/Mbti';
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
const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

function App() {
  const page = useSelector((state) => state.mbti.page);

  return (
    <>
      <GlobalStyle />
      <Main>{page === 0 ? <Start /> : <Mbti />}</Main>
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
