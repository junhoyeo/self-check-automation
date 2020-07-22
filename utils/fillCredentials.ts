import {
  ICredentials,
  getSchoolCode,
} from '../api';

type TFilledCredentials = Required<ICredentials> | null;

const fillCredentials = async (storedCredentials: ICredentials): Promise<TFilledCredentials> => {
  const { schoolName } = storedCredentials;
  const firstSchoolCode = await getSchoolCode(schoolName);
  if (firstSchoolCode) {
    console.log(`📝 ${schoolName}의 학교코드는 ${firstSchoolCode} 입니다.`);
    return {
      ...storedCredentials,
      schoolCode: firstSchoolCode,
    };
  }
  return null;
};

export default fillCredentials;
