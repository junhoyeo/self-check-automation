import {
  ICredentials,
  getSchoolCode,
} from '../api';


type TFilledCredentials = Required<ICredentials> | null;

import getAreaURL from "../api/utils/getAreaURL"

/*
   Edited at 2020-08-01
   Copyright BelBone, All rights reserved.
*/

const fillCredentials = async (storedCredentials: ICredentials): Promise<TFilledCredentials> => {
  const { schoolName } = storedCredentials;

  const SchoolURL = await getAreaURL({
    schoolRegion: storedCredentials.schoolRegion
  });
  const firstSchoolCode = await getSchoolCode(SchoolURL, schoolName);
  if (firstSchoolCode) {
    //console.log(`📝 ${schoolName}의 학교코드는 ${firstSchoolCode} 입니다.`);
    return {
      ...storedCredentials,
      schoolCode: firstSchoolCode,
      schoolRegion: SchoolURL
    };
  }
  return null;
};

export default fillCredentials;
