import {
  ICredentials,
  getCertification,
  getCheckResponse,
  getSchoolCode,
} from './api';

import { successText, drawSuccessBox } from './constants';

import storedCredentials from './credentials.json';

const fillCredentials = async (storedCredentials: ICredentials): Promise<Required<ICredentials> | null> => {
  const { schoolName } = storedCredentials;
  const firstSchoolCode = await getSchoolCode(schoolName);
  if (firstSchoolCode) {
    console.log(`📝 ${schoolName}의 학교코드는 ${firstSchoolCode} 입니다.`);
    return {
      ...storedCredentials,
      schoolCode: firstSchoolCode,
    }
  }
  return null;
};

(async () => {
  const {
    schoolCode = '',
  } = storedCredentials as ICredentials;

  const credentials = await (async () => {
    if (schoolCode) {
      return storedCredentials;
    }
    return await fillCredentials(storedCredentials);
  })() as Required<ICredentials>;

  const certification = await getCertification(credentials);
  const { data: html } = await getCheckResponse({ certification, ...credentials });
  if (html.includes(successText)) {
    drawSuccessBox();
  }
})();
