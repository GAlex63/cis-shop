import PropTypes from "prop-types";
import SearchIcon from "@mui/icons-material/Search";
import { SearchContainer } from "./style";
import { Input } from "../input/Input";

export const Search = ({ searchPhrase, onChange }) => {
  return (
    <SearchContainer>
      <Input
        value={searchPhrase}
        placeholder="Поиск по наименованию..."
        onChange={onChange}
        icon={SearchIcon}
      />
    </SearchContainer>
  );
};

Search.propTypes = {
  searchPhrase: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};