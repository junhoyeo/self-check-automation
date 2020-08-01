import api from './utils/api';
import { ICredentialsWithBaseURL, ICertificationResponse } from './utils/interfaces';

const getCertification = async ({
  schoolCode: schulCode,
  schoolName: schulNm,
  studentName: pName,
  studentBirth: frnoRidno,
  baseURL,
}: Required<ICredentialsWithBaseURL>): Promise<string> => {
  const {
    data,
  } = await api(baseURL, '/stv_cvd_co00_012.do', {
    schulCode,
    schulNm,
    pName,
    frnoRidno,
  }) as ICertificationResponse;
  const {
    resultSVO: {
      qstnCrtfcNoEncpt,
    },
  } = data;
  return qstnCrtfcNoEncpt;
};

export default getCertification;
