import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const style = {
    linkStyle: {
      textDecoration: 'none',
      color: 'black',
    },
  };
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">홈으로 이동</Link>
          </li>
          <li>
            <Link to="/profile">프로필 페이지 이동</Link>
          </li>
          <li>
            <Link to="/board">게시판 페이지 이동</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
