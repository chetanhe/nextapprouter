import { apiUrl, clientId, clientSecret, deviceId, deviceType } from '@/config';
import { sendRequest } from '@/util';

async function getHomePageData() {
  //init request
  const url = `${apiUrl}/init`;
  let reqData = {
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: 'client_credentials',
    brand_id: 7,
    device_id: deviceId,
    device_type: deviceType,
    language: 'en',
  };

  const initData = await sendRequest(url, reqData);

  if (!initData.success) {
    throw new Error('Failed to fetch data');
  }

  reqData = {
    brand_id: 7,
    device_id: deviceId,
    domain_id: 57,
    page_id: 3,
    path: 'en/',
    gender: '',
    device_type: deviceType,
  };
  const homeUrl = `${apiUrl}/init/checkrewriteurl`;

  const homePageData = await sendRequest(
    homeUrl,
    reqData,
    initData.data.response.token
  );

  return { initData, homePageData };
}

export default async function Page() {
  const { initData, homePageData } = await getHomePageData();

  return <h1>En page</h1>;
}
