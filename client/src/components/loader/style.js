import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Spinner = styled.div`
  border: 8px solid var(--color-primary-blue-opacity);
  border-top: 8px solid var(--color-primary-blue);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1.2s linear infinite;
`;
