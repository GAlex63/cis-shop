
import styled from "styled-components";

const H2Container = ({ children, className }) => {
  return <h2 className={className}>{children}</h2>;
};

export const H2 = styled(H2Container)`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
`;
