import React from 'react';
import { useParams } from 'react-router-dom';

export default function BoardDetail() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h2> {params.boardId} 번 게시글입니다.</h2>
    </>
  );
}
