export const successText = 'SUCCESS';

export const drawSuccessBox = () => {
  const timestamp = new Date().toLocaleString();
  const spacesAfterTimestamp = ' '.repeat(32 - timestamp.length);
  console.log(`
┌────────────────────────────────────────┐
│                                        │
│  🎉 자가진단 참여를 완료하였습니다!    │
│  ✨${timestamp}✨${spacesAfterTimestamp}│
│                                        │
└────────────────────────────────────────┘
  `);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const drawFailedBox = (statusCode: string) => {
  const timestamp = new Date().toLocaleString();
  const spacesAfterTimestamp = ' '.repeat(32 - timestamp.length);
  const getReason = () =>
    // TODO: Add other reasons for failure
    '참여주소 또는 본인확인 정보를 확인해주세요!';

  console.log(`
┌────────────────────────────────────────┐
│                                        │
│  😱 자가진단 참여에 실패했습니다..     │
│  ✨${timestamp}✨${spacesAfterTimestamp}│
│                                        │
└────────────────────────────────────────┘

🔑 문제 해결을 위해 ${getReason()}`);
};
