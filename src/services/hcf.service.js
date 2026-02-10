const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const calculateHCF = (numbers) => {
  return numbers.reduce((acc, num) => gcd(acc, num));
};

module.exports = { calculateHCF };