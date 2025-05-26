import styled from "styled-components";

const ButtonContainer = ({ className, children, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export const Button = styled(ButtonContainer)`
  margin-bottom: 12px;
  padding: 10px 16px;
  user-select: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  font-size: ${({ fontSize = "18px" }) => fontSize};
  width: ${({ width = "auto" }) => width};
  min-width: 110px;
  height: ${({ height = "36px" }) => height};

  border: 1px solid
    ${({ variant }) => {
      switch (variant) {
        case "danger":
          return "var(--color-danger)";
        case "edit":
          return "#13a500";
        default:
          return "var(--color-primary-blue)";
      }
    }};

  background-color: ${({ variant }) => {
    switch (variant) {
      case "danger":
        return "var(--color-danger)";
      case "edit":
        return "#13a500";
      default:
        return "var(--color-primary-blue)";
    }
  }};

  border-radius: 7px;
  color: #fff;
  transition: background 0.3s ease, border 0.3s ease;

  &:hover {
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
    background: ${({ variant }) => {
      switch (variant) {
        case "danger":
          return "linear-gradient(90deg, #fc6161 0%, #fc9b1b 100%)";
        case "edit":
          return "linear-gradient(90deg, #7aef6b 0%, #14a001 100%)";
        default:
          return "linear-gradient(90deg, #5b9fed 0%, #0152a3 100%)";
      }
    }};
    border: none;
  }
`;