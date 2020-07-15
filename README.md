# Self Check Automation
> **경기도교육청의 학생 건강상태 자가진단을 위한, 빠르고 가벼운 자동화 스크립트입니다.**
>
> Blazing fast COVID-19 Self-diagnosis check for Gyeonggi-do schools

![Typed-with-TypeScript](https://camo.githubusercontent.com/21132e0838961fbecb75077042aa9b15bc0bf6f9/68747470733a2f2f62616467656e2e6e65742f62616467652f4275696c74253230576974682f547970655363726970742f626c7565)

<img alt="result" src="./docs/images/result.png" width="512">

## 🔍 Why

<img alt="meme-1" src="./docs/images/meme-1.jpg" width="256">

- 맨날 들어가서 체크하기 귀찮고 실수로 빼먹었다가 갈굼당하면 속상합니다.

- 이미 존재하는 같은 목적의 다른 프로그램들은 셀레니움 등을 이용해 브라우저를 제어하는 방식으로 구현되어 있기 때문에 불필요한 메모리를 많이 사용하고, 속도도 느려서 피곤합니다.

## 🚀 Usage

### 1. Clone repo
```bash
# 깃허브에서 프로젝트를 클론합니다.
git clone https://github.com/junhoyeo/self-check-automation
cd self-check-automation
```

### 2. Update credentials
```json
{
  "schoolCode": "J100000855",
  "schoolName": "한국디지털미디어고등학교",
  "studentName": "여준호",
  "studentBirth": "030704"
}
```

[credentials.json](./credentials.json)에 개인정보를 입력합니다.

| 필드명 | 설명 | 타입 |
| ---- | --- | --- |
| `schoolCode` | 학교 코드 | `string` |
| `schoolName` | 학교 이름 | `string` |
| `studentName` | 사용자 이름 | `string` |
| `studentBirth` | 사용자 생년월일(`yyMMdd`로 8자리 숫자) | `string` |

### 3. Build & Run

```bash
# credentials.json을 편집한 뒤, 타입스크립트를 컴파일합니다.
# 수정이 발생하지 않는다면, 다시 빌드할 필요가 없습니다.
yarn
yarn build

# 스크립트를 실행합니다.
yarn start
```

## 👽 Furthermore
리눅스나 맥을 사용하고 계신다면 특정 시간마다 자동으로 명령어를 실행할 수 있는 [crontab](https://crontab.guru/)에 대해서 알아보세요!

### Todo

- [ ] 경기도 외 다른 교육청도 지원
- [ ] 초기 실행 시, 학교 코드 검색을 자동화
