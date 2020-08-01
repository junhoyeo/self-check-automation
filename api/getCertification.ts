import api from './utils/api';
import { ICredentials, ICertificationResponse } from './utils/interfaces';

const getCertification = async ({
  schoolCode: schulCode,
  schoolName: schulNm,
  studentName: pName,
  studentBirth: frnoRidno,
  schoolRegion: baseUrl
}: Required<ICredentials>): Promise<string> => {
  const {
    data,
  } = await api(baseUrl, '/stv_cvd_co00_012.do', {
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
