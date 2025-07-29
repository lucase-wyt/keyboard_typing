import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDatabase } from '../contexts/database';
import { useSettings } from '../contexts/setting';
import {
  TextContent,
  InputArea,
  StatsPanel,
  StatCard,
  StatValue,
  StatLabel,
} from '../components/styled-components/styled-page';
import { Card, Button, Typography, Row, Col, Space, Select } from 'antd';
import { TrophyOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

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
  const [selectedLibrary, setSelectedLibrary] = useState('beginner');
  const [currentText, setCurrentText] = useState('');
  const [currentTextItem, setCurrentTextItem] = useState(null);
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
        setCurrentTextItem(randomText);
      }
    } else {
      // 从数据库加载自定义词库
      const library = libraries.find(
        (lib) => lib.id.toString() === selectedLibrary,
      );
      if (library && library.words) {
        const randomText =
          library.words[Math.floor(Math.random() * library.words.length)];
        setCurrentTextItem(randomText);
        if (randomText?.key) setCurrentText(randomText?.key);
        else setCurrentText(randomText);
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

    const renderedChars = currentText.split('').map((char, index) => {
      let className = '';

      if (index < userInput.length) {
        className = userInput[index] === char ? 'correct' : 'incorrect';
      } else if (index === userInput.length) {
        className = 'current';
      }

      return (
        <>
          <span key={index} className={className}>
            {char}
          </span>
        </>
      );
    });
    return (
      <>
        <div>{renderedChars}</div>
        <div>{currentTextItem?.desc ?? ''}</div>
      </>
    );
  };

  return (
    <div style={{ padding: '0 24px' }}>
      <Title level={2}>
        <TrophyOutlined style={{ color: '#6366f1', marginRight: 8 }} />
        打字练习
      </Title>
      <Card style={{ marginBottom: 24 }}>
        <Row gutter={16}>
          <Col span={12}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Select
                style={{ width: '100%' }}
                onChange={(value) => {
                  setSelectedLibrary(String(value));
                }}
                placeholder="选择一个词库"
                size="large"
              >
                {libraries.map((library) => (
                  <option key={library.id} value={library.id}>
                    {library.name}
                  </option>
                ))}
              </Select>
            </Space>
          </Col>
          <Col span={12}>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Button size="large" type="default" onClick={loadPracticeText}>
                换一段
              </Button>
              <Button
                size="large"
                type="primary"
                style={{ marginLeft: '16px' }}
                onClick={resetPractice}
              >
                重新开始
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
      <Card style={{ marginBottom: 24 }}>
        <div
          style={{
            marginBottom: '16px',
            minHeight: '150px',
            background: 'rgb(248, 249, 250)',
            borderRadius: '12px',
            padding: '30px',
            marginBottom: '20px',
            fontSize: '18px',
            lineHeight: '1.8',
            fontFamily: '"Courier New", monospace',
            minHeight: '200px',
            position: 'relative',
          }}
        >
          <TextContent>{renderTextWithHighlight()}</TextContent>
        </div>
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
            <Button size="large" type="primary" onClick={loadPracticeText}>
              继续练习
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}

export default PracticePage;
