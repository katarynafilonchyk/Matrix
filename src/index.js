module.exports = function towelSort (matrix) {
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      let Idx = i % 2 === 0
      ? j
      : (matrix[i].length - j - 1) ;
      let arr = matrix[i][Idx];
      console.log(arr);
    }
  }
  
}
