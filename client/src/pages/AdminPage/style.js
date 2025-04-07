import styled from "styled-components";

export const AdminPageContainer = styled.div`
  display: flex;
  max-width: 80%;
  justify-content: space-between;
  margin: 100px 10%;
  padding: 20px;
`;
export const AdminItemsSection = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 100%;
`;
export const AdminItem = styled.div`
  padding: 15px 20px;
  margin: 10px 0;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  background-color: var(--color-primary-blue);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #6e5360;
    transform: translateY(-3px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    background-color: #9b848f;
    transform: translateY(0);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  }
`;
