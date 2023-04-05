import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Test() {
  const weight = useSelector((state) => state.weightReducer);
  const dispatch = useDispatch();
  return (
    <>
      <h1>당신의 몸무게는 {weight}</h1>
      <button onClick={() => dispatch({ type: '증가' })}>증가하기</button>
      <button onClick={() => dispatch({ type: '감소' })}>감소하기</button>
      <Link to="/test">리덕스로 이동</Link>
    </>
  );
}
