import { forwardRef } from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

const InputWrapper = styled.div`
  position: relative;
  width: ${({ width = "100%" }) => width};
`;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 40px 10px 10px; /* справа добавили место под иконку */
  border: 1px solid #000;
  border-radius: 6px;
  font-size: 16px;
  box-sizing: border-box;
`;

const InputIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none; /* чтобы клики шли по input */
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Основной компонент с forwardRef
export const Input = forwardRef(({ icon: IconComponent, width, ...props }, ref) => {
  return (
    <InputWrapper width={width}>
      <StyledInput ref={ref} {...props} />
      {IconComponent && (
        <InputIcon>
          <Icon icon={IconComponent} size="20px" color="#555" />
        </InputIcon>
      )}
    </InputWrapper>
  );
});