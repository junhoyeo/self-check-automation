import api from './utils/api';
import { ICredentialsWithCertification } from './utils/interfaces';

const check = async ({
  certification: qstnCrtfcNoEncpt,
  schoolName: schulNm,
  studentName: stdntName,
}: ICredentialsWithCertification) => {
  const res = await api('/stv_cvd_co02_000.do', {
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

  return res;
};

export default check;
