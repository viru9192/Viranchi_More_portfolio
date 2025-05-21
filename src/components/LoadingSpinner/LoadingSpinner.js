import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0.5;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.5;
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--background);
`;

const SpinnerWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`;

const SpinnerCircle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid transparent;
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;

  &:before,
  &:after {
    content: '';
    position: absolute;
    border: 4px solid transparent;
    border-radius: 50%;
  }

  &:before {
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-top-color: var(--secondary);
    animation: ${spin} 2s linear infinite;
  }

  &:after {
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-top-color: var(--accent);
    animation: ${spin} 1.5s linear infinite;
  }
`;

const LoadingText = styled.div`
  position: absolute;
  top: calc(50% + 60px);
  left: 50%;
  transform: translateX(-50%);
  color: var(--text);
  font-size: 1rem;
  font-weight: 500;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerWrapper>
        <SpinnerCircle />
        <LoadingText>Loading...</LoadingText>
      </SpinnerWrapper>
    </SpinnerContainer>
  );
};

export default LoadingSpinner; 