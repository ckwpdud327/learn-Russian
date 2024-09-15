import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  margin-bottom: 1rem;
`;

const StartLearningButton = styled(Link)`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 2rem;
`;

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <Title>LeanRussian에 오신 것을 환영합니다</Title>
      <Subtitle>한국인을 위한 최고의 러시아어 학습 플랫폼</Subtitle>
      <FeatureList>
        <FeatureItem>✓ 러시아어 알파벳 학습</FeatureItem>
        <FeatureItem>✓ 단계별 학습 코스</FeatureItem>
        <FeatureItem>✓ 회화 연습 및 발�� 교정</FeatureItem>
        <FeatureItem>✓ 단어장 및 퀴즈</FeatureItem>
        <FeatureItem>✓ 러시아 문화 콘텐츠</FeatureItem>
        <FeatureItem>✓ 학습자 커뮤니티</FeatureItem>
      </FeatureList>
      <StartLearningButton to="/learn">학습 시작하기</StartLearningButton>
    </HomeWrapper>
  );
};

export default Home;
