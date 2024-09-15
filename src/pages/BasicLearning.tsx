/// <reference types="react" />

import React, { useState } from 'react';
import styled from 'styled-components';

const LearningContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const LearningCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

const Word = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Translation = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Example = styled.p`
  font-style: italic;
`;

const Button = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const basicWords = [
  { word: 'Здравствуйте', translation: '안녕하세요', example: 'Здравствуйте, как дела?' },
  { word: 'Спасибо', translation: '감사합니다', example: 'Спасибо за помощь.' },
  { word: 'Пожалуйста', translation: '천만에요', example: 'Пожалуйста, не за что.' },
  { word: 'Да', translation: '네', example: 'Да, я согласен.' },
  { word: 'Нет', translation: '아니오', example: 'Нет, я не знаю.' },
  // 더 많은 기본 단어를 추가해 주세요
];

const BasicLearning: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextWord = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % basicWords.length);
  };

  const prevWord = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + basicWords.length) % basicWords.length);
  };

  const current = basicWords[currentIndex];

  return (
    <LearningContainer>
      <h1>기본 단어 및 문장 구조 학습</h1>
      <LearningCard>
        <Word>{current.word}</Word>
        <Translation>{current.translation}</Translation>
        <Example>{current.example}</Example>
      </LearningCard>
      <Button onClick={prevWord}>이전</Button>
      <Button onClick={nextWord}>다음</Button>
    </LearningContainer>
  );
};

export default BasicLearning;
