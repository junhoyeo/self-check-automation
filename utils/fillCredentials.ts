import { writeFile } from 'fs';

import {
  ICredentials,
  getAreaURL,
  getSchoolCode,
} from '../api';

import { ICredentialsForFill } from '../api/utils/interfaces';

type TFilledCredentials = Required<ICredentialsForFill> | null;

const fillCredentials = async (storedCredentials: ICredentials): Promise<TFilledCredentials> => {
  const { schoolName, schoolRegion } = storedCredentials;
  const baseURL = getAreaURL(schoolRegion);

  const firstSchoolCode = await getSchoolCode(baseURL, schoolName);
  if (firstSchoolCode) {
    console.log(`📝 ${schoolName}의 학교코드는 ${firstSchoolCode} 입니다.`);

    const newCredentials: ICredentials = {
      ...storedCredentials,
      schoolCode: firstSchoolCode,
    };

    writeFile('./credentials.json', JSON.stringify(newCredentials, null, 2), (err) => {
      if (err) {
        throw new Error('❌ 학교코드를 저장할 수 없습니다.');
      }
    });

    return {
      ...storedCredentials,
      schoolCode: firstSchoolCode,
    };
  }
  return null;
};

export default fillCredentials;
