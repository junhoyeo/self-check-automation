export interface IEssentialInfo {
  schoolName: string;
  studentName: string,
}

export interface ICredentials extends IEssentialInfo {
  schoolCode?: string;
  schoolRegion: string,
  studentBirth: string;
}

interface IAPIResponse<Response> {
  data: Response
}

export type TFindUserReponse = IAPIResponse<{
  orgName: string;
  admnYn: string;
  atptOfcdcConctUrl: string;
  mngrClassYn: string;
  pInfAgrmYn: string;
  userName: string;
  stdntYn: string;
  token: string;
  mngrDeptYn: string;
}>

export type TRegisterServeyResponse = IAPIResponse<{
  registerDtm: string;
  inveYmd: string;
}>
