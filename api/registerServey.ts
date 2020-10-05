import api from './utils/client';
import { TRegisterServeyResponse } from './utils/interfaces';
import { serveyData } from './utils/constants';

interface IRegisterServeyProps {
  studentName: string;
  token: string;
}

const registerServey = async ({ studentName, token }: IRegisterServeyProps) => {
  const { data: registerData } = await api.post('/registerServey', {
    ...serveyData,
    upperToken: token,
    upperUserNameEncpt: studentName,
  }, {
    headers: {
      Authorization: token,
    }
  }) as TRegisterServeyResponse;

  return registerData;
};

export default registerServey;
