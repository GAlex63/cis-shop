import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CartIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const UserNameDisplay = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-primary-blue);
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 8px 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  min-width: 180px;
  z-index: 100;
`;

export const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  color: var(--text-color);
  transition: background 0.3s ease, color 0.3s ease;
  width: 100%;
  gap: 12px;

  &:hover {
    background-color: var(--color-light-gray);
    color: var(--color-accent);

    svg {
      color: var(--color-accent);
    }
  }

  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    transition: color 0.3s ease;
  }

  span {
    flex-grow: 1;
    text-align: left;
  }
`;
