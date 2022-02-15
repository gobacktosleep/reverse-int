module.exports = function reverse (n) {
  let num = n.toString().split('');
  return parseInt(num.reverse().join(''));
}
