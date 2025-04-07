 import styled from "styled-components";

 export const Title = styled.h2`
 font-size: ${({ size }) => size || "24px"};
 font-weight: ${({ weight }) => weight || "bold"};
 color: ${({ color }) => color || "#000"};
 margin: ${({ margin }) => margin || "20px 0"};
 text-align: ${({ align }) => align || "left"};
`;