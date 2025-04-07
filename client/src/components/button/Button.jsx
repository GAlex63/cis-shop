import styled from "styled-components";

const ButtonContainer = ({ className, children, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export const Button = styled(ButtonContainer)`
  user-select: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ fontSize = "18px" }) => fontSize};
  width: ${({ width = "100%" }) => width};
  height: ${({ height = "32px" }) => height};

  border: 1px solid var(--color-primary-blue);
  background-color: var(--color-primary-blue);
  border-radius: 10px;

  color: #eee;

  transition: background 1s cubic-bezier(0.53, -0.04, 0.75, 0.72),
    border 1s cubic-bezier(0.53, -0.04, 0.75, 0.72);

  &:hover {
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

    border: none;
    background: linear-gradient(
      90deg,
      /* #ff6d6d 0%, */
      #f82727 53.38%,
      #fc9b1b 100%
    );
  }
`;
