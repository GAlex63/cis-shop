export const checkAccess = (access, userRole) => {
  console.log(userRole);
  access.includes(userRole);
};
