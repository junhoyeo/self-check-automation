export interface IEssentialInfo {
  schoolName: string;
  studentName: string,

}

export interface ICredentials extends IEssentialInfo {
  schoolCode?: string;
  studentBirth: string;
  schoolRegion: string,
}

export interface ICredentialsForFill extends IEssentialInfo {
  schoolCode?: string;
  studentBirth: string;
  schoolURL: string,
}

export interface ICredentialsWithCertification extends IEssentialInfo {
  certification: string;
}

export interface SchoolURLInfo {
  schoolRegion: string;
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
