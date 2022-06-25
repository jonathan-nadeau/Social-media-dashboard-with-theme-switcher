export const thousandFormatter = (num) => {
  if (Math.abs(num) > 99999) {
    return Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + 'M';
  } else if (Math.abs(num) > 9999) {
    return Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k';
  } else {
    return Math.sign(num) * Math.abs(num);
  }
};
