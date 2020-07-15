import getCheckResponse from './api/getCheckResponse';
import getCertification from './api/getCertification';
import credentials from './credentials.json';

import { successText, drawSuccessBox } from './constants';

(async () => {
  const certification = await getCertification(credentials);
  const { data: html } = await getCheckResponse({ certification, ...credentials });
  if (html.includes(successText)) {
    drawSuccessBox();
  }
})();
