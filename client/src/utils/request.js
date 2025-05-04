export const request = async (url, method = "GET", body) => {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  const response = await fetch(`http://localhost:5000/api${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    credentials: "include",
    body: body ? JSON.stringify(body) : undefined,
  });

  const responseData = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(error.message || "Ошибка запроса");
  }

  return responseData;
};
