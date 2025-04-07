import { forwardRef } from "react";
import styled from "styled-components";

export const Input = styled.input.attrs((props) => ({
  ref: props.forwardRef,
}))`
  width: ${({ width = "100%" }) => width};
  height: 40px;
  margin: 0 0 10px;
  padding: 10px;
  border: 1px solid #000;
`;

export const ForwardedInput = forwardRef((props, ref) => (
  <Input {...props} forwardedRef={ref} />
));
