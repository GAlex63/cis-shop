export function request(url, method, data) {
  return fetch(`http://localhost:5000${url}`, {
    headers: {
      "content-type": "application/json",
    },
    method: method || "GET",
    credentials: "include",
    body: data ? JSON.stringify(data) : undefined,
  }).then((res) => res.json());
}
