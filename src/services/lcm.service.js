const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const lcmTwo = (a, b) => {
  return (a * b) / gcd(a, b);
};

const calculateLCM = (numbers) => {
  return numbers.reduce((acc, num) => lcmTwo(acc, num));
};

module.exports = { calculateLCM };