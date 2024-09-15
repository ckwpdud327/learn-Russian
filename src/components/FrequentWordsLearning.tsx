import React, { useState } from 'react';
import styled from 'styled-components';
import { frequentWords, FrequentWord } from '../data/frequentWords';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const WordCard = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

const Word = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

const Info = styled.p`
  margin: 5px 0;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: #45a049;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Progress = styled.div<{ width: number }>`
  width: ${props => props.width}%;
  height: 100%;
  background-color: #4CAF50;
  border-radius: 10px;
  transition: width 0.3s ease-in-out;
`;

const FrequentWordsLearning: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const currentWord = frequentWords[currentWordIndex];

  const nextWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % frequentWords.length);
    setShowTranslation(false);
  };

  const prevWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex - 1 + frequentWords.length) % frequentWords.length);
    setShowTranslation(false);
  };

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  const progress = ((currentWordIndex + 1) / frequentWords.length) * 100;

  return (
    <Container>
      <h1>자주 사용되는 러시아어 단어</h1>
      <ProgressBar>
        <Progress width={progress} />
      </ProgressBar>
      <WordCard>
        <Word>{currentWord.russian}</Word>
        <Info><strong>발음:</strong> {currentWord.romanization}</Info>
        {showTranslation && (
          <>
            <Info><strong>의미:</strong> {currentWord.korean}</Info>
            <Info><strong>예문:</strong> {currentWord.example}</Info>
          </>
        )}
      </WordCard>
      <Button onClick={prevWord}>이전</Button>
      <Button onClick={nextWord}>다음</Button>
      <Button onClick={toggleTranslation}>
        {showTranslation ? '뜻 숨기기' : '뜻 보기'}
      </Button>
      <p>진행도: {currentWordIndex + 1} / {frequentWords.length}</p>
    </Container>
  );
};

export default FrequentWordsLearning;