
import { TableRow } from "../table-row/Table-row";
import styled from "styled-components";
import { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

import { Icon } from "../../../../../components";
import { request } from "../../../../../utils/request";

const UserRowContainer = ({
  className,
  id,
  login,
  registeredAt,
  roleId: userRoreId,
  roles,
  onUserRemove,
}) => {
  const [initialRoleId, setInitialRoleId] = useState(userRoreId);
  const [selectedRoleId, setSelectedRoleId] = useState(userRoreId);
  const isSaveButtonDisabled = selectedRoleId === initialRoleId;

  const onRoleChange = ({ target }) => {
    setSelectedRoleId(Number(target.value));
  };
  const onRoleSave = (userId, newUserRoleId) => {
    request(`/api/users/${userId}`, "PATCH", { roleId: newUserRoleId})
    .then(() => {
      setInitialRoleId(newUserRoleId);
    });
  };

  return (
    <div className={className}>
      <TableRow border={true}>
        <div className="login-column">{login}</div>
        <div className="registered-at-column">{registeredAt}</div>
        <div className="role-column">
          <select value={selectedRoleId} onChange={onRoleChange}>
            {roles.map(({ id: roleId, name: roleName }) => (
              <option key={roleId} value={roleId}>
                {roleName}
              </option>
            ))}
          </select>
          <Icon
            icon={SaveIcon}
            margin="0 0 0 10px"
            disabled={isSaveButtonDisabled}
            onClick={() => onRoleSave(id, selectedRoleId)}
          />
        </div>
      </TableRow>
      <Icon icon={DeleteIcon} margin="0 0 0 10px" onClick={onUserRemove} />
    </div>
  );
};
export const UserRow = styled(UserRowContainer)`
  display: flex;
  margin-top: 10px;

  & select {
    padding: 0 5px;
    font-size: 16px;
  }
`;
