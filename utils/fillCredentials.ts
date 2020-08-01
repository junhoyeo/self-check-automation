import {
  ICredentials,
  getSchoolCode,
} from '../api';


type TFilledCredentials = Required<ICredentials> | null;

import getAreaURL from "../api/utils/getAreaURL"
import fs, { readFile, read, readdir } from "fs"
import { errorMonitor } from 'form-data';

import storedCredentials from "../credentials.json"
import { successText } from './constants';


const fillCredentials = async (storedCredentials: ICredentials): Promise<TFilledCredentials> => {
  const { schoolName } = storedCredentials;

  const schoolURL = await getAreaURL({
    schoolRegion: storedCredentials.schoolRegion
  });
  const firstSchoolCode = await getSchoolCode(schoolURL, schoolName);
  if (firstSchoolCode) {
    console.log(`📝 ${schoolName}의 학교코드는 ${firstSchoolCode} 입니다.`);

    const returnData: TFilledCredentials = {
      ...storedCredentials,
      schoolCode: firstSchoolCode,
      schoolRegion: schoolURL
    };

    var readedData: ICredentials = storedCredentials;
      if(readedData !== null) {
        readedData.schoolCode = firstSchoolCode;
        fs.writeFile("./credentials.json", JSON.stringify(readedData, null, 3), (err) => {
          if(err) {
            throw new Error("❌ 학교코드를 반영할 수 없습니다.")
          }
        })
      }

    
    return returnData;
  }
  return null;
};

export default fillCredentials;
