function solution(line) {
  let posarr = {
    Q: [0, 0],
    W: [1, 0],
    E: [2, 0],
    R: [3, 0],
    T: [4, 0],
    Y: [5, 0],
    U: [6, 0],
    I: [7, 0],
    O: [8, 0],
    P: [9, 0],
    1: [0, 1],
    2: [1, 1],
    3: [2, 1],
    4: [3, 1],
    5: [4, 1],
    6: [5, 1],
    7: [6, 1],
    8: [7, 1],
    9: [8, 1],
    0: [9, 1],
  };
  let left = [0, 0];
  let right = [9, 0];
  let answer = [];

  for (let i = 0; i < line.length; i++) {
    let leftdis =
      Math.abs(posarr[line[i]][0] - left[0]) +
      Math.abs(posarr[line[i]][1] - left[1]);
    let rightdis =
      Math.abs(posarr[line[i]][0] - right[0]) +
      Math.abs(posarr[line[i]][1] - right[1]);

    if (leftdis < rightdis) {
      answer.push(0);
      left = [];
      left.push(posarr[line[i]][0]);
      left.push(posarr[line[i]][1]);
    } else if (leftdis > rightdis) {
      answer.push(1);
      right = [];
      right.push(posarr[line[i]][0]);
      right.push(posarr[line[i]][1]);
    } else {
      if (
        Math.abs(posarr[line[i]][0] - left[0]) <
        Math.abs(posarr[line[i]][0] - right[0])
      ) {
        answer.push(0);
        left = [];
        left.push(posarr[line[i]][0]);
        left.push(posarr[line[i]][1]);
      } else if (
        Math.abs(posarr[line[i]][0] - left[0]) >
        Math.abs(posarr[line[i]][0] - right[0])
      ) {
        answer.push(1);
        right = [];
        right.push(posarr[line[i]][0]);
        right.push(posarr[line[i]][1]);
      } else {
        if (posarr[line[i]][0] < 5) {
          answer.push(0);
          left = [];
          left.push(posarr[line[i]][0]);
          left.push(posarr[line[i]][1]);
        } else {
          answer.push(1);
          right = [];
          right.push(posarr[line[i]][0]);
          right.push(posarr[line[i]][1]);
        }
      }
    }
    console.log(leftdis, rightdis);
  }

  return answer;
}

solution("Q4OYPI");
