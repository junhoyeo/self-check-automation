import {
  ICredentials,
  getAreaURL,
  getCertification,
  getCheckResponse,
} from './api';

import { successText, drawSuccessBox, drawFailedBox } from './utils/constants';
import fillCredentials from './utils/fillCredentials';

import storedCredentials from './credentials.json';

(async () => {
  const {
    schoolCode = '',
    schoolRegion,
  } = storedCredentials as ICredentials;

  const credentials = await (async () => {
    if (schoolCode) {
      return storedCredentials;
    }
    const filledCredentials = await fillCredentials(storedCredentials);
    if (!filledCredentials) {
      throw new Error('❌ 학교를 찾을 수 없습니다.');
    }

    return filledCredentials;
  })() as Required<ICredentials>;

  const baseURL = getAreaURL(schoolRegion);
  const certification = await getCertification({
    ...credentials,
    baseURL,
  });

  const {
    data: {
      resultSVO: {
        rtnRsltCode: resultCode,
      },
    },
  } = await getCheckResponse(baseURL, {
    ...credentials,
    certification,
  });
  if (resultCode === successText) {
    drawSuccessBox();
  } else {
    drawFailedBox(resultCode);
  }
})();
