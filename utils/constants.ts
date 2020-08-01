import { time } from "console";

export const successText = 'SUCCESS';

export const drawSuccessBox = () => {
  const timestamp = new Date().toLocaleString();
  const spacesAfterTimestamp = ' '.repeat(32 - timestamp.length);
  console.log(`
┌──────────────────────────────────────┐
│                                      │
│  🎉 자가진단 참여를 완료하였습니다!  │
│  ✨${timestamp}✨${spacesAfterTimestamp}│
│                                      │
└──────────────────────────────────────┘
  `);
};


/*
   Created at 2020-08-01.
   Copyright BelBone all rights reserved.
*/

export const drawFailedBox = (code: string) => {
  const timestamp = new Date().toLocaleString();
  const spacesAfterTimestamp = ' '.repeat(32 - timestamp.length);

  const getReason = ((statusCode: string = code) => {
    // Todo 
    return "참여주소 또는 본인확인 정보를 확인해주세요!";
  })(code);
  console.log(`
┌──────────────────────────────────────┐
│                                      │
│  🤐 자가진단 참여에 실패했습니다..   │
│  ✨${timestamp}✨${spacesAfterTimestamp}│
└──────────────────────────────────────┘


🔑 문제 해결을 위해 ${getReason}
  `);
}