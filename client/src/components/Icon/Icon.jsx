import styled from 'styled-components';

const IconWrapper = styled.div`
  width: ${({ size = '30px' }) => size};
  height: ${({ size = '30px' }) => size};
  color: ${({ color = 'black' }) => color};
  margin: ${({ margin = '0 auto' }) => margin};
  border: ${({ border = 'none' }) => border};
  border-radius: ${({ borderRadius = '4px' }) => borderRadius};

  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.3s ease, border 0.3s ease;

  &:hover {
    color: ${({ hoverColor = 'gray' }) => hoverColor};
    cursor: pointer;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Icon = ({
  icon: IconComponent,
  size,
  color,
  hoverColor,
  margin,
  onClick,
  border,
  borderRadius,
  ...props
}) => {
  return (
    <IconWrapper
      size={size}
      color={color}
      hoverColor={hoverColor}
      margin={margin}
      border={border}
      borderRadius={borderRadius}
      onClick={onClick}
      {...props}
    >
      <IconComponent />
    </IconWrapper>
  );
};