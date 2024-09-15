import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }

const alphabets = [
  { char: 'А', romanization: 'A', sound: 'a', example: 'автобус (avtobus) - 버스', koreanEquivalent: '아' },
  { char: 'Б', romanization: 'B', sound: 'b', example: 'банк (bank) - 은행', koreanEquivalent: 'ㅂ' },
  { char: 'В', romanization: 'V', sound: 'v', example: 'вода (voda) - 물', koreanEquivalent: 'ㅂ' },
  { char: 'Г', romanization: 'G', sound: 'g', example: 'город (gorod) - 도시', koreanEquivalent: 'ㄱ' },
  { char: 'Д', romanization: 'D', sound: 'd', example: 'дом (dom) - 집', koreanEquivalent: 'ㄷ' },
  { char: 'Е', romanization: 'Ye', sound: 'ye', example: 'ель (yel\') - 전나무', koreanEquivalent: '예' },
  { char: 'Ё', romanization: 'Yo', sound: 'yo', example: 'ёлка (yolka) - 크리스마스 트리', koreanEquivalent: '요' },
  { char: 'Ж', romanization: 'Zh', sound: 'zh', example: 'жук (zhuk) - 딱정벌레', koreanEquivalent: 'ㅈ' },
  { char: 'З', romanization: 'Z', sound: 'z', example: 'зима (zima) - 겨울', koreanEquivalent: 'ㅈ' },
  { char: 'И', romanization: 'I', sound: 'i', example: 'игра (igra) - 게임', koreanEquivalent: '이' },
  { char: 'Й', romanization: 'Y', sound: 'y', example: 'йогурт (yogurt) - 요구르트', koreanEquivalent: 'ㅣ' },
  { char: 'К', romanization: 'K', sound: 'k', example: 'кот (kot) - 고양이', koreanEquivalent: 'ㅋ' },
  { char: 'Л', romanization: 'L', sound: 'l', example: 'лампа (lampa) - 램프', koreanEquivalent: 'ㄹ' },
  { char: 'М', romanization: 'M', sound: 'm', example: 'мама (mama) - 엄마', koreanEquivalent: 'ㅁ' },
  { char: 'Н', romanization: 'N', sound: 'n', example: 'нос (nos) - 코', koreanEquivalent: 'ㄴ' },
  { char: 'О', romanization: 'O', sound: 'o', example: 'окно (okno) - 창문', koreanEquivalent: '오' },
  { char: 'П', romanization: 'P', sound: 'p', example: 'папа (papa) - 아빠', koreanEquivalent: 'ㅍ' },
  { char: 'Р', romanization: 'R', sound: 'r', example: 'рука (ruka) - 손', koreanEquivalent: 'ㄹ' },
  { char: 'С', romanization: 'S', sound: 's', example: 'сон (son) - 꿈', koreanEquivalent: 'ㅅ' },
  { char: 'Т', romanization: 'T', sound: 't', example: 'телефон (telefon) - 전화', koreanEquivalent: 'ㅌ' },
  { char: 'У', romanization: 'U', sound: 'u', example: 'утка (utka) - 오리', koreanEquivalent: '우' },
  { char: 'Ф', romanization: 'F', sound: 'f', example: 'фото (foto) - 사진', koreanEquivalent: 'ㅍ' },
  { char: 'Х', romanization: 'Kh', sound: 'kh', example: 'хлеб (khleb) - 빵', koreanEquivalent: 'ㅎ' },
  { char: 'Ц', romanization: 'Ts', sound: 'ts', example: 'цирк (tsirk) - 서커스', koreanEquivalent: 'ㅊ' },
  { char: 'Ч', romanization: 'Ch', sound: 'ch', example: 'час (chas) - 시간', koreanEquivalent: 'ㅊ' },
  { char: 'Ш', romanization: 'Sh', sound: 'sh', example: 'школа (shkola) - 학교', koreanEquivalent: '시' },
  { char: 'Щ', romanization: 'Shch', sound: 'shch', example: 'щека (shcheka) - 뺨', koreanEquivalent: '시' },
  { char: 'Ъ', romanization: '"', sound: '경음부호', example: 'объект (ob"yekt) - 물체', koreanEquivalent: '없음' },
  { char: 'Ы', romanization: 'Y', sound: 'y', example: 'сын (syn) - 아들', koreanEquivalent: '으' },
  { char: 'Ь', romanization: "'", sound: '연음부호', example: 'день (den\') - 날', koreanEquivalent: '없음' },
  { char: 'Э', romanization: 'E', sound: 'e', example: 'это (eto) - 이것은', koreanEquivalent: '에' },
  { char: 'Ю', romanization: 'Yu', sound: 'yu', example: 'юбка (yubka) - 치마', koreanEquivalent: '유' },
  { char: 'Я', romanization: 'Ya', sound: 'ya', example: 'яблоко (yabloko) - 사과', koreanEquivalent: '야' },
];

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 30px;
`;

const AlphabetCard = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const CharDisplay = styled.h2`
  font-size: 72px;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
`;

const InfoText = styled.p`
  font-size: 18px;
  color: #34495e;
  margin: 10px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #ecf0f1;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Progress = styled.div<{ width: number }>`
  width: ${props => props.width}%;
  height: 100%;
  background-color: #2ecc71;
  border-radius: 5px;
  transition: width 0.3s ease-in-out;
`;

const QuizContainer = styled.div`
  margin-top: 30px;
`;

const QuizButton = styled(Button)`
  margin: 5px;
`;

const RecordButton = styled(Button)`
  background-color: #e74c3c;
  &:hover {
    background-color: #c0392b;
  }
`;

const FeedbackText = styled.p<{ correct: boolean }>`
  color: ${props => props.correct ? '#2ecc71' : '#e74c3c'};
  font-weight: bold;
`;

const AlphabetLearning: React.FC = () => {
  console.log("AlphabetLearning component rendered");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quizMode, setQuizMode] = useState(false);
  const [quizOptions, setQuizOptions] = useState<string[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    if (quizMode) {
      generateQuizOptions();
    }
  }, [currentIndex, quizMode]);

  const nextAlphabet = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % alphabets.length);
    setQuizMode(false);
  };

  const prevAlphabet = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + alphabets.length) % alphabets.length);
    setQuizMode(false);
  };

  const playSound = () => {
    const exampleWord = alphabets[currentIndex].example.split(' ')[0]; // 예시 단어의 첫 부분만 사용
    const utterance = new SpeechSynthesisUtterance(exampleWord);
    utterance.lang = 'ru-RU';
    utterance.rate = 0.8; // 속도를 약간 줄임
    window.speechSynthesis.speak(utterance);
  };

  const generateQuizOptions = () => {
    const options = [alphabets[currentIndex].romanization];
    while (options.length < 4) {
      const randomIndex = Math.floor(Math.random() * alphabets.length);
      const randomOption = alphabets[randomIndex].romanization;
      if (!options.includes(randomOption)) {
        options.push(randomOption);
      }
    }
    setQuizOptions(options.sort(() => Math.random() - 0.5));
  };

  const checkAnswer = (answer: string) => {
    if (answer === alphabets[currentIndex].romanization) {
      alert('정답입니다!');
      setQuizMode(false);
    } else {
      alert('틀렸습니다. 다시 시도해보세요.');
    }
  };

  const startRecording = () => {
    setIsRecording(true);
    setFeedback('');

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setFeedback('죄송합니다. 이 브라우저는 음성 인식을 지원하지 않습니다.');
      setIsRecording(false);
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = 'ru-RU';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    let speechDetected = false;

    recognition.start();

    // 5초 후에 자동으로 녹음 중지
    const timer = setTimeout(() => {
      if (recognition) {
        recognition.stop();
        if (!speechDetected) {
          setFeedback('음성이 감지되지 않았습니다. 다시 시도해 주세요.');
        }
      }
    }, 5000);

    recognition.onresult = (event: any) => {
      speechDetected = true;
      clearTimeout(timer);
      const speechResult = event.results[0][0].transcript.toLowerCase();
      const expectedChar = alphabets[currentIndex].char.toLowerCase();
      
      if (speechResult === expectedChar) {
        setFeedback('정확합니다! 잘하셨어요.');
      } else {
        setFeedback(`아쉽네요. 다시 시도해보세요. 인식된 발음: ${speechResult}`);
      }
    };

    recognition.onerror = (event: any) => {
      clearTimeout(timer);
      console.error('Speech recognition error', event.error);
      setFeedback('음성 인식 중 오류가 발생했습니다. 다시 시도해주세요.');
      setIsRecording(false);
    };

    recognition.onend = () => {
      clearTimeout(timer);
      if (!speechDetected) {
        setFeedback('음성이 감지되지 않았습니다. 다시 시도해 주세요.');
      }
      setIsRecording(false);
    };
  };

  const current = alphabets[currentIndex];
  const progress = ((currentIndex + 1) / alphabets.length) * 100;

  return (
    <PageContainer>
      <Title>러시아어 알파벳 학습</Title>
      <ProgressBar>
        <Progress width={progress} />
      </ProgressBar>
      <AlphabetCard>
        <CharDisplay>{current.char}</CharDisplay>
        {!quizMode && (
          <>
            <InfoText><strong>로마자 표기:</strong> {current.romanization}</InfoText>
            <InfoText><strong>발음:</strong> {current.sound}</InfoText>
            <InfoText><strong>예시:</strong> {current.example}</InfoText>
            <InfoText><strong>한국어 유사 발음:</strong> {current.koreanEquivalent}</InfoText>
            <Button onClick={playSound}>예시 단어 발음 듣기</Button>
            <InfoText><small>(예시 단어의 발음을 들려줍니다)</small></InfoText>
            
            <RecordButton onClick={startRecording} disabled={isRecording}>
              {isRecording ? '녹음 중...' : '발음 녹음하기'}
            </RecordButton>
            {feedback && <FeedbackText correct={feedback.includes('정확합니다')}>{feedback}</FeedbackText>}
          </>
        )}
      </AlphabetCard>
      <ButtonContainer>
        <Button onClick={prevAlphabet}>이전</Button>
        <Button onClick={nextAlphabet}>다음</Button>
        <Button onClick={() => setQuizMode(true)}>퀴즈 모드</Button>
      </ButtonContainer>
      {quizMode && (
        <QuizContainer>
          <h3>이 알파벳의 로마자 표기는 무엇일까요?</h3>
          {quizOptions.map((option, index) => (
            <QuizButton key={index} onClick={() => checkAnswer(option)}>
              {option}
            </QuizButton>
          ))}
        </QuizContainer>
      )}
    </PageContainer>
  );
};

export default AlphabetLearning;