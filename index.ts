import {
  ICredentials,
  getCertification,
  getCheckResponse,
} from './api';

import { successText, drawSuccessBox } from './utils/constants';
import fillCredentials from './utils/fillCredentials';

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

  const certification = await getCertification(credentials);
  const { data } = await getCheckResponse({ certification, ...credentials });
  if(data.resultSVO.rtnRsltCode == successText) {
    drawSuccessBox();
  }
})();
