import { findUser, registerServey } from './api';
import storedCredentials from './credentials.json';

(async () => {
  try {
    const { token } = await findUser(storedCredentials);
    const { studentName } = storedCredentials;
    const registerData = await registerServey({ studentName, token });
    console.log(registerData);
  } catch (error) {
    console.log(error?.message);
    console.log(error?.response.data);
  }
})();
