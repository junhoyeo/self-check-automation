export interface IEssentialInfo {
  schoolName: string;
  studentName: string;
}

export interface ICredentials extends IEssentialInfo {
  schoolCode: string;
  studentBirth: string;
}

export interface ICredentialsWithCertification extends IEssentialInfo {
  certification: string;
}
