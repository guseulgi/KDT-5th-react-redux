import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import OrangeButton from '../components/0405/OrangeButton';
import { useDispatch } from 'react-redux';
import { init, next } from '../store/modules/mbti';

const Header = styled.p`
  font-size: 3em;
`;
const SubHeader = styled.p`
  font-size: 1.5em;
  color: #777;
`;
const MainImg = styled.img`
  width: inherit;
`;

export default function Start() {
  const [counts, setCounts] = useState(0);
  const dispatch = useDispatch();

  async function fetchCounts() {
    const resCountsData = await fetch('http://localhost:4000/data/getcount');
    if (resCountsData.status === 200) {
      const countsData = await resCountsData.json();
      console.log(countsData);
      if (countsData.counts !== undefined) setCounts(countsData.counts);
    } else {
      console.log(resCountsData.json());
    }
  }

  async function fetchData() {
    const resMbtiData = await fetch('http://localhost:4000/data/getdata');
    if (resMbtiData.status === 200) {
      const data = await resMbtiData.json();
      if (data[0]) dispatch(init(data[0]));
      console.log(data);
    } else {
      // throw new Error('통신 오류');
      console.log(await resMbtiData.json());
    }
  }

  useEffect(() => {
    fetchData();
    fetchCounts();
  }, []);

  return (
    <>
      <Header>개발자 MBTI 조사</Header>
      <MainImg src="/images/main.jpg" alt="메인 이미지" />
      <SubHeader>
        개발자가 흔히 접하는 상황에 따라서 MBTI를 알아봅시다.{'\n\n'} {counts}
        명이 참여해주셨습니다
      </SubHeader>
      <OrangeButton text="테스트 시작" clickEvent={() => dispatch(next())} />
    </>
  );
}
