import axios from 'axios';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../store/modules/user';

export default function Login() {
  const registerIdInput = useRef();
  const registerPwInput = useRef();

  const dispatch = useDispatch();

  // const registerUser = async () => {
  //   if (!registerIdInput.current.value || !registerPwInput.current.value)
  //     return alert('아이디와 비밀번호 값을 입력하세요');
  //   const resRegister = await fetch('http://localhost:4000/user/register', {
  //     method: 'post',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       id: registerIdInput.current.value,
  //       password: registerPwInput.current.value,
  //     }),
  //   });

  //   if (resRegister.status !== 200) return alert(await resRegister.json());
  //   alert(await resRegister.json());
  //   dispatch(
  //     login({
  //       id: registerIdInput.current.value,
  //       password: registerPwInput.current.value,
  //     }),
  //   );
  //   registerIdInput.current.value = '';
  //   registerPwInput.current.value = '';
  // };

  const registerUser = async () => {
    if (!registerIdInput.current.value || !registerPwInput.current.value)
      return alert('아이디와 비밀번호 값을 입력하세요');

    const resRegister = await axios.post(
      'http://localhost:4000/user/register',
      {
        id: registerIdInput.current.value,
        password: registerPwInput.current.value,
      },
    );
    console.log(resRegister);
    if (resRegister.status !== 200) return alert(resRegister.data);
    alert('회원 가입 성공');
    dispatch(
      login({
        id: registerIdInput.current.value,
        password: registerPwInput.current.value,
      }),
    );
    registerIdInput.current.value = '';
    registerPwInput.current.value = '';
  };

  return (
    <>
      <h1>로그인 파트</h1>
      아이디 : <input type="text" /> <br />
      비밀번호 : <input type="password" /> <br />
      <button>로그인</button> <Link to="">카카오 로그인</Link>
      <h1>회원가입 파트</h1>
      아이디 : <input type="text" ref={registerIdInput} /> <br />
      비밀번호 : <input type="password" ref={registerPwInput} /> <br />
      <button onClick={registerUser}>회원가입</button>
    </>
  );
}
