export async function sendRequest(url, reqData, token) {
  let headers = { 'Content-Type': 'application/json' };
  if (token) {
    headers = { ...headers, ...{ Authorization: token } };
  }
  const request = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(reqData),
  });

  return await request.json();
}
