import {
  ICredentials,
  getCertification,
  getCheckResponse,
} from './api';

import { successText, drawSuccessBox, drawFailedBox } from './utils/constants';
import fillCredentials from './utils/fillCredentials';
import getAreaURL from "./api/utils/getAreaURL"
import storedCredentials from './credentials.json';

(async () => {
  const {
    schoolCode = '',
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

  const certificationURL = await getAreaURL(storedCredentials);
  const certification = await getCertification({
    ...credentials,
    schoolRegion: certificationURL
  }).then(r => r).catch(e => {
    console.error(e)
    return ""
  })

  console.log(`처리 URL ${certificationURL}`);
  const {
    data: {
      resultSVO: {
        rtnRsltCode: resultCode,
      },
    },
  } = await getCheckResponse(certificationURL, { certification, ...credentials });
  if (resultCode == successText) {
    drawSuccessBox();
  } else {
    drawFailedBox(resultCode);
  }
})();
