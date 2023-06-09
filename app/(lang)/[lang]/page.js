import { apiUrl, clientId, clientSecret, deviceId, deviceType } from '@/config';
import { sendRequest } from '@/util';

export const dynamicParams = false; // true | false,
export const fetchCache = 'force-cache';

async function getHomePageData(lang) {
  //init request
  const url = `${apiUrl}/init`;
  let reqData = {
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: 'client_credentials',
    brand_id: 7,
    device_id: deviceId,
    device_type: deviceType,
    language: lang,
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
    path: `${lang}/`,
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

export async function generateStaticParams(){
  return [{lang: 'en'}, {lang: 'de'}];
}


export default async function Page({params:{lang}}) {
  const { initData, homePageData } = await getHomePageData(lang);

  return (
    <>
    <div>{JSON.stringify(initData)}</div>
    <h1>{lang} page</h1>
    </>
  )
  
}
