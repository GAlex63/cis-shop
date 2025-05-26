import styled from "styled-components";

export const AuthorizationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
  padding: 24px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  width: 100%;
  padding: 32px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const StyledLink = styled.div`
  text-align: center;
  margin-top: 16px;

  a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    color: var(--color-primary-blue);
    transition: color 0.3s;

    &:hover {
      color: var(--color-accent);
    }
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
`;

// import styled from "styled-components";

// export const AuthorizationContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   & > form {
//     display: flex;
//     flex-direction: column;
//     width: 260px;
//   }
// `;
// export const StyledLink = styled.div`
//   text-align: center;
//   text-decoration: underline;
//   margin: 20px 0;
//   font-size: 18px;
// `;
