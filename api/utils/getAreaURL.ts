import { SchoolURLInfo } from "./interfaces";

export interface AreaData {
    [key: string]: string;
}

const AreaURL : AreaData = {
    "경기": "https://eduro.goe.go.kr/",
    "서울": "https://eduro.sen.go.kr/",
    "대전": "https://eduro.dje.go.kr/",
    "대구": "https://eduro.dge.go.kr/",
    "부산": "https://eduro.pen.go.kr/",
    "인천": "https://eduro.ice.go.kr/",
    "광주": "https://eduro.gen.go.kr/",
    "울산": "https://eduro.use.go.kr/",
    "세종": "https://eduro.sje.go.kr/",
    "충북": "https://eduro.cbe.go.kr/",
    "충남": "https://eduro.cne.go.kr/",
    "경북": "https://eduro.gbe.kr/",
    "경남": "https://eduro.gne.go.kr/",
    "강원": "https://eduro.kwe.go.kr/",
    "전북": "https://eduro.jbe.go.kr/",
    "전남": "https://eduro.jne.go.kr/",
    "제주": "https://eduro.jje.go.kr/"
};


const getAreaURL = async (regionString: SchoolURLInfo) => {
    if(!AreaURL[regionString.schoolRegion]) {
        throw new Error(`😰 학교의 지역정보가 올바르지 않아요. (${Object.keys(AreaURL).join(", ")} 중 선택)`);
    }
    return AreaURL[regionString.schoolRegion];
}

export default getAreaURL;