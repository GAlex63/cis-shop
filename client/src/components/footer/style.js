import styled from "styled-components";

export const Copyright = styled.div`
  text-align: center;
  padding: 5px 0;
  border-top: 1px solid #444;
  font-size: 0.9em;
`;
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  a {
    color: #fff;
    text-decoration: none;
    margin-top: 5px;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const FooterContainer = styled.footer`
  background-color: rgba(39, 2, 171, 0.91);
  padding: 10px 20px;
  color: #fff;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 5px;
  border-bottom: 1px solid #444;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;

  width: 30px;
  height: 30px;
  margin-left: 10px;
`;
