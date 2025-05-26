import styled from "styled-components";

export const CatalogContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  margin: 100px auto 0;
  width: 100%;
  max-width: 1440px;
  margin-inline: auto;
`;

export const Sidebar = styled.div`
  width: 220px;
  min-width: 220px;
  max-width: 220px;
  height: 100vh;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  background-color: #fafafa;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

export const SidebarItem = styled.li`
  margin: 20px 0;
  cursor: pointer;
  font-size: 18px;
  word-wrap: break-word;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-primary-blue);
  }
`;

// export const Sidebar = styled.aside`
//   box-sizing: border-box;
//   position: sticky;
//   top: 100px;
//   width: 240px;
//   min-height: 100vh;
//   padding: 24px 16px;
//   background-color: #fafafa;
//   border-right: 1px solid #ddd;

//   ul {
//     margin: 0;
//     padding: 0;
//     list-style: none;
//   }
// `;

// export const SidebarItem = styled.li`
//   list-style: none;
//   margin-bottom: 16px;
//   padding: 8px 12px;
//   cursor: pointer;
//   font-size: 16px;
//   font-weight: 500;
//   color: #333;
//   border-radius: 4px;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: var(--color-light-gray);
//     color: var(--color-primary-blue);
//   }
// `;

export const MainContent = styled.main`
  flex-grow: 1;
  padding: 20px 32px;
  box-sizing: border-box;
  min-width: 300px;
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
