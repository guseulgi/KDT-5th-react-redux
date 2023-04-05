const weightState = 100;
const nowDate = new Date();

export default function weight(state = weightState, action) {
  if (action.type === '증가') {
    const month = nowDate.getMonth() + 1; // 인덱스 상
    return state + month;
  } else if (action.type === '감소') {
    const date = nowDate.getDate();
    return state - date;
  }
  return state;
}
