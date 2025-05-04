export const checkAccess = (access, userRole) => {
  console.log(userRole);
  console.log("access", access);
  return access.includes(userRole);
};
