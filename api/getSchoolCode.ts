import api from './utils/api';

const getSchoolCode = async (schulNm: string): Promise<string> => {
  const {
    data: html,
  } = await api('/stv_cvd_co00_003.do', {
    schulNm,
  });

  const regexToFindFirstSchoolCode = /name="firstSchulCode" value="([A-Z0-9]+)"/g;
  const matches = regexToFindFirstSchoolCode.exec(html);
  if (matches) {
    const [_, schoolCode] = matches;
    return schoolCode;
  }
  return '';
};

export default getSchoolCode;
