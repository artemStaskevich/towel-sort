module.exports = function towelSort (matrix) {
  var arr = [], buf = [];
  if (matrix != undefined) {
    for (var i = 0; i < matrix.length; i++) {
      if (i % 2 == 0) {
        buf = matrix[i];
      } else {
        buf = matrix[i].reverse();
      }

      for (var j = 0; j < buf.length; j++) {
        arr.push(buf[j]);
      }
    }
  }
  return arr;
}
