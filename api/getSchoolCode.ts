import api from './utils/api';
import { IHTMLResponse } from './utils/interfaces';

const getSchoolCode = async (schulNm: string): Promise<string> => {
  const {
    data: html,
  } = await api('/stv_cvd_co00_003.do', {
    schulNm,
  }) as IHTMLResponse;

  const regexToFindFirstSchoolCode = /name="firstSchulCode" value="([A-Z0-9]+)"/g;
  const matches = regexToFindFirstSchoolCode.exec(html);
  if (matches && matches.length > 1) {
    const schoolCode = matches[1];
    return schoolCode;
  }
  return '';
};

export default getSchoolCode;
