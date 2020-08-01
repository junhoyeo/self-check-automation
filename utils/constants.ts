

export const successText = 'SUCCESS';
const timestamp = new Date().toLocaleString();
const spacesAfterTimestamp = ' '.repeat(32 - timestamp.length);
export const drawSuccessBox = () => {
  
  console.log(`
┌──────────────────────────────────────┐
│                                      │
│  🎉 자가진단 참여를 완료하였습니다!  │
│  ✨${timestamp}✨${spacesAfterTimestamp}│
│                                      │
└──────────────────────────────────────┘
  `);
};



export const drawFailedBox = (code: string) => {
  const getReason = ((statusCode: string) => {
    // TODO  
    return "참여주소 또는 본인확인 정보를 확인해주세요!";
  })(code);
  console.log(`
┌──────────────────────────────────────┐
│                                      │
│  🤐 자가진단 참여에 실패했습니다..   │
│  ✨${timestamp}✨${spacesAfterTimestamp}│
└──────────────────────────────────────┘


🔑 문제 해결을 위해 ${getReason}`);
}



