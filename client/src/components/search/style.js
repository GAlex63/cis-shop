import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  width: 95%;
  height: 40px;
  margin: 40px  0;
  box-shadow: rgba(0, 0, 0, 0.1);
  


  & > input {
    padding: 10px 32px 10px 10px;
  }

  & > div {
    position: absolute;
    top: 3px;
    right: 9px;
   
  }
`;