import styled from 'styled-components';


const IconWrapper = styled.div`
  width: ${(props) => props.size || '30px'};
  height: ${(props) => props.size || '40px'};
  color: ${(props) => props.color || 'black'};
  margin: ${(props) => props.margin || '0 auto'};
  border: ${(props) => props.border || '1 px solid'};
  border-radius: ${(props) => props.borderRadius || '2px'};
  

  &:hover {
    color: ${(props) => props.hoverColor || 'gray'};
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;


export const Icon = ({ icon: IconComponent, size, color, hoverColor, margin, onClick, border, borderRadius }) => {
  return (
    <IconWrapper size={size} color={color} hoverColor={hoverColor} margin={ margin} onClick={onClick} border={border} borderRadius={borderRadius}>
      <IconComponent />
    </IconWrapper>
  );
};