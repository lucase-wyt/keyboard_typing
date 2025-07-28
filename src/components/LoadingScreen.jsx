import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 20px;
`;

const LoadingText = styled.h2`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 10px;
`;

const LoadingSubtext = styled.p`
  font-size: 16px;
  opacity: 0.8;
`;

function LoadingScreen() {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>编程记忆练习</LoadingText>
      <LoadingSubtext>正在初始化应用程序...</LoadingSubtext>
    </LoadingContainer>
  );
}

export default LoadingScreen;
