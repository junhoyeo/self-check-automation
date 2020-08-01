import api from './utils/api';
import {
  ICredentialsWithCertification,
  ICheckStatusResponse,
} from './utils/interfaces';

const check = async (baseUrl: string, {
  certification: qstnCrtfcNoEncpt,
  schoolName: schulNm,
  studentName: stdntName,
}: ICredentialsWithCertification) => {
  const sendRequest = async (endpoint: string) => await api(baseUrl, endpoint, {
    qstnCrtfcNoEncpt,
    schulNm,
    stdntName,
    rtnRsltCode: 'SUCCESS',
    rspns01: '1',
    rspns02: '1',
    rspns07: '0',
    rspns08: '0',
    rspns09: '0',
  });

  const res = await sendRequest('/stv_cvd_co01_000.do');
  return res as ICheckStatusResponse;
};

export default check;
