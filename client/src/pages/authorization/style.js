import styled from "styled-components";

export const AuthorizationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > form {
    display: flex;
    flex-direction: column;
    width: 260px;
  }
`;
export const StyledLink = styled.div`
  text-align: center;
  text-decoration: underline;
  margin: 20px 0;
  font-size: 18px;
`;