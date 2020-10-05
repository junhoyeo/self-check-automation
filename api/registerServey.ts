import api from './utils/client';
import { TRegisterServeyResponse } from './utils/interfaces';
import { serveyData } from './utils/constants';

interface IRegisterServeyProps {
  studentName: string;
  token: string;
}

const registerServey = async ({ studentName, token }: IRegisterServeyProps) => {
  const { data: registerData }: TRegisterServeyResponse = await api.post('/registerServey', {
    ...serveyData,
    upperToken: token,
    upperUserNameEncpt: studentName,
  }, {
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Authorization: token,
    },
  });

  return registerData;
};

export default registerServey;
