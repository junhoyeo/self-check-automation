/* eslint-disable */
import { publicKey } from './constants';

global.navigator = { appName: '@junhoyeo' } as any;
global.window = {} as any;

const JsEncrypt = require('jsencrypt').default;

const jsEncrypt = new JsEncrypt();
jsEncrypt.setPublicKey(publicKey);

const encrypt = (string: string): string =>
  jsEncrypt.encrypt(string);

export default encrypt;
