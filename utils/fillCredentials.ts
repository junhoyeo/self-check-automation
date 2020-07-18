import {
  ICredentials,
  getSchoolCode,
} from '../api';

type filledCredentials = Required<ICredentials> | null;

const fillCredentials = async (storedCredentials: ICredentials): Promise<filledCredentials> => {
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

export default fillCredentials;
