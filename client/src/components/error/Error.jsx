import { H2 } from "../h2/H2";
import { ErrorContainer } from "./style";

export const Error = ({ error }) => {
  if (!error) return null;

  return (
    <ErrorContainer>
      <H2>Ошибка</H2>
      <div>{error}</div>
    </ErrorContainer>
  );
};