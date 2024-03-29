# Self Check Automation
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

🚨 **공지: 이 스크립트는 건강상의 문제가 없을 경우, 브라우저를 열고 복잡한 인증 절차를 거칠 필요 없이 하나의 명령어로 빠르게 자가진단을 마치기 위해서 개발되었습니다. 실행 전 반드시 개인 건강상태를 확인해주시길 바랍니다.**

> **교육청에서 실시하는 학생 건강상태 자가진단을 위한, 빠르고 가벼운 자동화 스크립트입니다.**
>
> Blazing fast COVID-19 Self-diagnosis check for Korean schools

![Typed-with-TypeScript](https://camo.githubusercontent.com/21132e0838961fbecb75077042aa9b15bc0bf6f9/68747470733a2f2f62616467656e2e6e65742f62616467652f4275696c74253230576974682f547970655363726970742f626c7565)

<img alt="result" src="./docs/images/result.png" width="512">

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://trendy-resume.now.sh/"><img src="https://avatars2.githubusercontent.com/u/32605822?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Junho Yeo</b></sub></a><br /><a href="https://github.com/Junho Yeo/self-check-automation/commits?author=junhoyeo" title="Code">💻</a> <a href="https://github.com/Junho Yeo/self-check-automation/commits?author=junhoyeo" title="Documentation">📖</a> <a href="#maintenance-junhoyeo" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/MinSeungHyun"><img src="https://avatars1.githubusercontent.com/u/44062683?v=4?s=100" width="100px;" alt=""/><br /><sub><b>SeungHyun</b></sub></a><br /><a href="https://github.com/Junho Yeo/self-check-automation/commits?author=MinSeungHyun" title="Code">💻</a> <a href="https://github.com/Junho Yeo/self-check-automation/commits?author=MinSeungHyun" title="Documentation">📖</a> <a href="#maintenance-MinSeungHyun" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/BelBone"><img src="https://avatars0.githubusercontent.com/u/63758483?v=4?s=100" width="100px;" alt=""/><br /><sub><b>BelBone</b></sub></a><br /><a href="https://github.com/Junho Yeo/self-check-automation/commits?author=BelBone" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## 🔍 Why

<img alt="meme-1" src="./docs/images/meme-1.jpg" width="256">

- 맨날 들어가서 체크하기 귀찮고 실수로 빼먹었다가 갈굼당하면 속상합니다.

- 이미 존재하는 같은 목적의 다른 프로그램들은 셀레니움 등을 이용해 브라우저를 제어하는 방식으로 구현되어 있기 때문에 불필요한 메모리를 많이 사용하고, 속도도 느려서 피곤합니다.

- 학교 코드는 또 뭘까 처챠ㅑ메...

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
  "schoolRegion": "경기",
  "studentName": "여준호",
  "studentBirth": "030704"
}
```

[credentials.json](./credentials.json)에 개인정보를 입력합니다.

| 필드명 | 설명 | 타입 | 필수 여부 |
| ---- | --- | --- | ------- |
| `schoolCode` | 학교 코드 | `string` | ❌ |
| `schoolName` | 학교 이름 | `string` | **필수** |
| `schoolRegion` | 학교의 지역 이름(시/도 등의 구분) | `string` | **필수** |
| `studentName` | 사용자 이름 | `string` | **필수** |
| `studentBirth` | 사용자 생년월일(`yyMMdd`로 6자리 숫자) | `string` | **필수** |

#### 잠깐, 학교 코드를 모르셔도 괜찮아요!
**학교 코드**란 교육행정정보시스템(나이스)에서 각 학교를 구분하기 위해 내부적으로 사용하는 값입니다.<br />
그렇기 때문에 사용자 입장에서는 존재조차 모르는 경우가 많고, 실제로도 굳이 알고 있을 필요가 없습니다.

<img alt="result" src="./docs/images/get-school-code.png" width="672">

> 학교 이름만 정확히 입력하셨다면, 자동으로 학교 코드를 찾아 체크에 사용합니다.<br />
> 이후 credentials.json에 학교 코드가 자동으로 저장되어, 이후 실행부터는 검색 절차를 건너뛸 수 있도록 합니다.

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

### Todo

- [ ] 학교 코드 검색 시, 정확한 학교명이 아닌 검색어를 사용했을 경우를 생각해 코드와 함께 제공되는 학교 이름을 가져오도록 하기
- [x] 검색한 학교 코드를 다음 실행 시에 바로 사용할 수 있도록 `credentials.json`에 저장하기
- [x] 경기도 외 다른 교육청도 지원
