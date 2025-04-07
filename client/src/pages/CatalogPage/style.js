import styled from "styled-components";

export const CatalogContainer = styled.div`
  display: flex;
  margin-top: 80px;
`;

export const Sidebar = styled.div`
  width: 200px;
  height: 900px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);;
`;

export const SidebarItem = styled.li`
  list-style: none;
  margin: 30px 0;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    color: var(--item-color);
  }
`;

export const MainContent = styled.div`
  flex-grow: 1;
  padding: 0 20px;
  margin: 0 auto;
`;

export const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  
`;
export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85%;  


`;

export const Item1 = styled.div`
  display: flex;
  align-items: flex-start; 

`;

export const Item2 = styled.div`
  display: flex;
  align-items: flex-end;
`;

