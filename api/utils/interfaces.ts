export interface IEssentialInfo {
  schoolName: string;
  studentName: string,
}

export interface ICredentials extends IEssentialInfo {
  schoolCode?: string;
  schoolRegion: string,
  studentBirth: string;
}

export interface ICredentialsWithBaseURL extends ICredentials {
  baseURL: string;
}

export interface ICredentialsForFill extends IEssentialInfo {
  schoolCode?: string;
  studentBirth: string;
}

export interface ICredentialsWithCertification extends IEssentialInfo {
  certification: string;
}

export interface ICertificationResponse {
  data: {
    resultSVO: {
      qstnCrtfcNoEncpt: string;
    }
  }
}

export interface ICheckStatusResponse {
  data: {
    resultSVO: {
      rtnRsltCode: string;
    }
  }
}

export interface IHTMLResponse {
  data: string;
}
