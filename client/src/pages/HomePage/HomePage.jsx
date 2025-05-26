import { InfoBlock } from "./components/InfoBlock/InfoBlock";
import { AboutBlock } from "./components/AboutBlock/AboutBlock";
import { Title } from "../../components";
import { ROLE } from "../../constans";
import { selectUserRole } from "../../selectors";
import { useSelector } from "react-redux";
import { checkAccess } from "../../utils";
import { AdminPage } from "../AdminPage/AdminPage";
import { MainBlock } from "./components/MainBlock/MainBlock";
import { HomePageContainer,  TitleBlock } from "./style";

export const HomePage = () => {

  const roleId = useSelector(selectUserRole);
  const isAdmin = checkAccess([ROLE.ADMIN], roleId);


  return (
    <HomePageContainer>
        <MainBlock />
        <TitleBlock>
          <Title>
            Работаем с 2000 года. 
          </Title>
        </TitleBlock>
        <AboutBlock />
        {/* <InfoBlock /> */}
        {isAdmin && <AdminPage />}
  </HomePageContainer>
  );
};
