import getCheckResponse from './api/getCheckResponse';
import getCertification from './api/getCertification';
import credentials from './credentials.json';

(async () => {
  const certification = await getCertification(credentials);
  const response = await getCheckResponse({ certification, ...credentials });
  console.log(response);
})();
