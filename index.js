function main(n, arr) {
  let m = n / 4;
  let mat = [];
  let ind = 0;
  for (let i = 0; i < 4; i++) {
    let newArr = [];
    for (let j = 0; j < m; j++) {
      newArr.push(arr[ind++]);
    }
    mat.push(newArr);
  }

  let mainSum = 0;
  for (let i = 0; i < mat.length; i++) {
    let sum = 0;
    for (let j = 0; j < mat[i].length; j++) {
      sum += mat[i][j];
    }
    if (i == 0) sum *= 17;
    if (i == 2) sum *= 7;

    mainSum += sum;
  }

  return sum;
}
