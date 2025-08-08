module.exports = function reverse(n) {
  const result = Number(String(Math.abs(n)).split(``).reverse().join(``));
  return result;
};
