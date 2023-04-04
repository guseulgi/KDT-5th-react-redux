import React from 'react';
import { Link } from 'react-router-dom';

export default function Board() {
  return (
    <>
      <h1>Board 페이지입니다.</h1>
      <Link to="1">
        <h4>게시글 1</h4>
      </Link>
      <Link to="2">
        <h4>게시글 2</h4>
      </Link>
    </>
  );
}
