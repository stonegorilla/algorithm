function solution(atmos) {
  let answer = 0;
  let maskday = 0;
  for (let i = 0; i < atmos.length; i++) {
    if (maskday === 0) {
      if (atmos[i][0] >= 151 && atmos[i][1] >= 76) {
        answer++;
      } else if (atmos[i][0] >= 81 || atmos[i][1] >= 36) {
        answer++;
        maskday++;
      } else {
      }
    } else if (maskday === 1) {
      if (atmos[i][0] >= 151 && atmos[i][1] >= 76) {
        maskday = 0;
      } else {
        maskday++;
      }
    } else {
      maskday = 0;
    }
  }
  return answer;
}
