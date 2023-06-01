let cdnUrls = '';
let gtmID = '';
let apiUrl = '';
let clientId = '';
let clientSecret = '';
let deviceId = '12345';
let deviceType = 1;

if (process.env.NEXT_PUBLIC_ENV == 'dev') {
  cdnUrls = 'https://121cdn.dev-projects.com/new121doc';
  gtmID = 'GTM-KWN7MZ6';
  apiUrl = 'https://api.dev-projects.com/v4';
  clientId = '121doc';
  clientSecret = 'fxX5T46KUPxqGpt8uli0fOUi48snl93_';
} else {
  cdnUrls = 'https://121cdn.stg-projects.com/new121doc';
  gtmID = 'GTM-KWN7MZ6';
  apiUrl = 'https://api.stg-projects.com/v4';
  clientId = '121doc';
  clientSecret = 'aT4EBfbfkx0GKBurCXQMuXU8SLdu-GAf';
}

export { cdnUrls, gtmID, apiUrl, clientId, clientSecret, deviceId, deviceType };
