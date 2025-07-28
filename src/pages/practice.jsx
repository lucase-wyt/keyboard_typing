import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDatabase } from '../contexts/database';
import { useSettings } from '../contexts/setting';
import {
  PageContainer,
  PageTitle,
  PracticeCard,
  ControlPanel,
  LibrarySelect,
  ActionButtons,
  TextDisplay,
  TextContent,
  InputArea,
  StatsPanel,
  StatCard,
  StatValue,
  StatLabel,
  Button,
} from '../components/styled-components/styled-page';

// 内置练习文本
const builtinTexts = {
  beginner: [
    'hello world welcome to typing practice',
    'the quick brown fox jumps over the lazy dog',
    'practice makes perfect keep typing every day',
  ],
  intermediate: [
    "Programming is not about typing, it's about thinking and problem solving.",
    'The best way to learn programming is to practice coding every single day.',
    'Technology is best when it brings people together and makes life easier.',
  ],
  advanced: [
    'In the rapidly evolving landscape of modern technology, artificial intelligence and machine learning have emerged as transformative forces that are reshaping industries and revolutionizing the way we approach complex problems.',
    'The intersection of creativity and technology continues to produce remarkable innovations that push the boundaries of what was previously thought possible in fields ranging from healthcare to entertainment.',
    'Successful software development requires not only technical expertise but also strong communication skills, collaborative teamwork, and a deep understanding of user needs and business requirements.',
  ],
};

function PracticePage() {
  const { db, isInitialized } = useDatabase();
  const { settings } = useSettings();
  const [libraries, setLibraries] = useState([]);
  const [selectedLibrary, setSelectedLibrary] = useState('builtin-beginner');
  const [currentText, setCurrentText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [stats, setStats] = useState({
    wpm: 0,
    accuracy: 100,
    errors: 0,
    timeElapsed: 0,
  });
  const inputRef = useRef(null);

  useEffect(() => {
    loadLibraries();
  }, [isInitialized]);

  useEffect(() => {
    if (selectedLibrary) {
      loadPracticeText();
    }
  }, [selectedLibrary]);

  useEffect(() => {
    if (isStarted && !isCompleted) {
      const interval = setInterval(() => {
        updateStats();
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isStarted, isCompleted, userInput]);

  const loadLibraries = async () => {
    if (!isInitialized || !db) return;

    try {
      const dbLibraries = await db.getLibraries();
      setLibraries(dbLibraries);
    } catch (error) {
      console.error('加载词库失败:', error);
    }
  };

  const loadPracticeText = () => {
    if (selectedLibrary.startsWith('builtin-')) {
      const level = selectedLibrary.replace('builtin-', '');
      const texts = builtinTexts[level];
      if (texts) {
        const randomText = texts[Math.floor(Math.random() * texts.length)];
        setCurrentText(randomText);
      }
    } else {
      // 从数据库加载自定义词库
      const library = libraries.find(
        (lib) => lib.id.toString() === selectedLibrary,
      );
      if (library && library.words) {
        const randomText =
          library.words[Math.floor(Math.random() * library.words.length)];
        setCurrentText(randomText);
      }
    }
    resetPractice();
  };

  const resetPractice = () => {
    setUserInput('');
    setStartTime(null);
    setEndTime(null);
    setIsStarted(false);
    setIsCompleted(false);
    setStats({
      wpm: 0,
      accuracy: 100,
      errors: 0,
      timeElapsed: 0,
    });
  };

  const startPractice = () => {
    setIsStarted(true);
    setStartTime(Date.now());
    inputRef.current?.focus();
  };

  const updateStats = () => {
    if (!startTime || isCompleted) return;

    const now = Date.now();
    const timeElapsed = Math.floor((now - startTime) / 1000);
    const wordsTyped = userInput.trim().split(/\s+/).length;
    const wpm =
      timeElapsed > 0 ? Math.round((wordsTyped / timeElapsed) * 60) : 0;

    let errors = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] !== currentText[i]) {
        errors++;
      }
    }

    const accuracy =
      userInput.length > 0
        ? Math.round(((userInput.length - errors) / userInput.length) * 100)
        : 100;

    setStats({
      wpm,
      accuracy,
      errors,
      timeElapsed,
    });
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (!isStarted) {
      startPractice();
    }

    setUserInput(value);

    // 检查是否完成
    if (value === currentText) {
      setIsCompleted(true);
      setEndTime(Date.now());
      savePracticeRecord();
    }
  };

  const savePracticeRecord = async () => {
    if (!db || !startTime || !endTime) return;

    try {
      const record = {
        date: new Date().toISOString(),
        libraryId: selectedLibrary,
        text: currentText,
        wpm: stats.wpm,
        accuracy: stats.accuracy,
        errors: stats.errors,
        timeElapsed: stats.timeElapsed,
        completedAt: endTime,
      };

      await db.addPracticeRecord(record);
      console.log('练习记录已保存');
    } catch (error) {
      console.error('保存练习记录失败:', error);
    }
  };

  const renderTextWithHighlight = () => {
    if (!currentText) return '';

    return currentText.split('').map((char, index) => {
      let className = '';

      if (index < userInput.length) {
        className = userInput[index] === char ? 'correct' : 'incorrect';
      } else if (index === userInput.length) {
        className = 'current';
      }

      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  return (
    <PageContainer>
      <PageTitle>🚀 开始练习</PageTitle>

      <PracticeCard>
        <ControlPanel>
          <LibrarySelect
            value={selectedLibrary}
            onChange={(e) => setSelectedLibrary(e.target.value)}
          >
            <option value="builtin-beginner">内置 - 初级</option>
            <option value="builtin-intermediate">内置 - 中级</option>
            <option value="builtin-advanced">内置 - 高级</option>
            {libraries.map((library) => (
              <option key={library.id} value={library.id}>
                {library.name}
              </option>
            ))}
          </LibrarySelect>

          <ActionButtons>
            <Button className="secondary" onClick={loadPracticeText}>
              🔄 换一段
            </Button>
            <Button className="primary" onClick={resetPractice}>
              🔁 重新开始
            </Button>
          </ActionButtons>
        </ControlPanel>

        <TextDisplay>
          <TextContent>{renderTextWithHighlight()}</TextContent>
        </TextDisplay>

        <InputArea
          ref={inputRef}
          value={userInput}
          onChange={handleInputChange}
          placeholder="开始输入上面的文本..."
          disabled={isCompleted}
        />

        <StatsPanel>
          <StatCard>
            <StatValue>{stats.wpm}</StatValue>
            <StatLabel>WPM (词/分钟)</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{stats.accuracy}%</StatValue>
            <StatLabel>准确率</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{stats.errors}</StatValue>
            <StatLabel>错误数</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>{stats.timeElapsed}s</StatValue>
            <StatLabel>用时</StatLabel>
          </StatCard>
        </StatsPanel>

        {isCompleted && (
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <h3 style={{ color: '#26de81', marginBottom: '15px' }}>
              🎉 练习完成！
            </h3>
            <ActionButtons>
              <Button className="success" onClick={loadPracticeText}>
                继续练习
              </Button>
            </ActionButtons>
          </div>
        )}
      </PracticeCard>
    </PageContainer>
  );
}

export default PracticePage;
