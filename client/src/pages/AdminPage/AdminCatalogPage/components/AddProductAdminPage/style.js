import styled from "styled-components";

const fieldWidth = "95%"; // общая ширина всех полей

export const AddProductAdminContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 20px;
`;

export const FormField = styled.div`
  margin-bottom: 20px;
`;

export const Select = styled.select`
  width: ${fieldWidth};
  height: 40px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: white;
  box-sizing: border-box;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-bottom: 16px;
`;

export const DropZone = styled.div`
  width: ${fieldWidth};
  padding: 20px;
  border: 2px dashed #888;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  background-color: #f8f8f8;
  box-sizing: border-box;

  p {
    margin: 0 0 10px;
    font-size: 14px;
    color: #666;
  }

  input {
    margin-top: 10px;
  }
`;

export const ImagePreview = styled.img`
  width: ${fieldWidth};
  max-height: 200px;
  margin-top: 10px;
  border-radius: 4px;
  object-fit: contain;
  box-sizing: border-box;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

// import styled from "styled-components"
// export const AddProductAdminContainer = styled.div`
// display: flex;
// flex-direction: column;
// margin-top: 150px;
// `

// export const ErrorMessage = styled.div`
//   color: red;
//   font-size: 12px;
//   margin-bottom: 10px;
// `;

// export const FormField = styled.div`
//   margin-bottom: 20px;
// `;
