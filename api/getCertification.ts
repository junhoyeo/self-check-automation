import api from './utils/api';
import { ICredentials } from './utils/interfaces';

const getCertification = async ({
  schoolCode: schulCode,
  schoolName: schulNm,
  studentName: pName,
  studentBirth: frnoRidno,
}: ICredentials): Promise<string> => {
  const {
    data,
  } = await api('/stv_cvd_co00_012.do', {
    schulCode,
    schulNm,
    pName,
    frnoRidno,
  });

  const {
    resultSVO: {
      qstnCrtfcNoEncpt,
    },
  } = data;
  return qstnCrtfcNoEncpt;
};

export default getCertification;
