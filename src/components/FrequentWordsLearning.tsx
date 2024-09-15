import React, { useState } from 'react';
import styled from 'styled-components';
import { chapters, FrequentWord } from '../data/frequentWords';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ChapterButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const ChapterButton = styled.button<{ isActive: boolean }>`
  padding: 10px 15px;
  background-color: ${props => props.isActive ? '#4CAF50' : '#f0f0f0'};
  color: ${props => props.isActive ? 'white' : 'black'};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.isActive ? '#45a049' : '#e0e0e0'};
  }
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

const PlayButton = styled(Button)`
  background-color: #3498db;
  &:hover {
    background-color: #2980b9;
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
 const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const currentChapter = chapters[currentChapterIndex];
  const currentWord = currentChapter.words[currentWordIndex];

  const changeChapter = (index: number) => {
    setCurrentChapterIndex(index);
    setCurrentWordIndex(0);
    setShowTranslation(false);
  };

  const nextWord = () => {
    if (currentWordIndex < currentChapter.words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    } else if (currentChapterIndex < chapters.length - 1) {
      setCurrentChapterIndex(currentChapterIndex + 1);
      setCurrentWordIndex(0);
    }
    setShowTranslation(false);
  };

  const prevWord = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex(currentWordIndex - 1);
    } else if (currentChapterIndex > 0) {
      setCurrentChapterIndex(currentChapterIndex - 1);
      setCurrentWordIndex(chapters[currentChapterIndex - 1].words.length - 1);
    }
    setShowTranslation(false);
  };

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  const playSound = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ru-RU';
    utterance.rate = 0.8; // 속도를 약간 줄임
    window.speechSynthesis.speak(utterance);
  };

  const chapterProgress = ((currentWordIndex + 1) / currentChapter.words.length) * 100;

  return (
    <Container>
      <h1>자주 사용되는 러시아어 단어</h1>
      <ChapterButtonContainer>
        {chapters.map((chapter, index) => (
          <ChapterButton
            key={chapter.id}
            isActive={index === currentChapterIndex}
            onClick={() => changeChapter(index)}
          >
            {chapter.title}
          </ChapterButton>
        ))}
      </ChapterButtonContainer>
      <ProgressBar>
        <Progress width={chapterProgress} />
      </ProgressBar>
      <WordCard>
        <Word>{currentWord.russian}</Word>
        <Info><strong>발음:</strong> {currentWord.romanization}</Info>
        <PlayButton onClick={() => playSound(currentWord.russian)}>단어 발음 듣기</PlayButton>
        {showTranslation && (
          <>
            <Info><strong>의미:</strong> {currentWord.korean}</Info>
            <Info><strong>예문:</strong> {currentWord.exampleRussian}</Info>
            <Info><strong>예문 발음:</strong> {currentWord.exampleRomanization}</Info>
            <Info><strong>예문 번역:</strong> {currentWord.exampleKorean}</Info>
            <PlayButton onClick={() => playSound(currentWord.exampleRussian)}>예문 발음 듣기</PlayButton>
          </>
        )}
      </WordCard>
      <Button onClick={prevWord}>이전</Button>
      <Button onClick={nextWord}>다음</Button>
      <Button onClick={toggleTranslation}>
        {showTranslation ? '뜻 숨기기' : '뜻 보기'}
      </Button>
      <p>챕터 진행도: {currentWordIndex + 1} / {currentChapter.words.length}</p>
      <p>전체 진행도: {currentChapterIndex * 20 + currentWordIndex + 1} / {chapters.length * 20}</p>
    </Container>
  );
};

export default FrequentWordsLearning;