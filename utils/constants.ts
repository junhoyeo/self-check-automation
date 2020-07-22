export const successText = 'SUCCESS';

export const drawSuccessBox = () => {
  const timestamp = new Date().toLocaleString();
  const spacesAfterTimestamp = ' '.repeat(30 - timestamp.length);
  console.log(`
┌──────────────────────────────────────┐
│                                      │
│  🎉 자가진단 참여를 완료하였습니다!  │
│  ✨${timestamp}✨${spacesAfterTimestamp}│
│                                      │
└──────────────────────────────────────┘
  `);
};
