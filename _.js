const _ = {
  clamp(currentVal, lowerBound, upperBound) {
    if (currentVal < lowerBound) {
      return lowerBound;
    } else if (currentVal > upperBound) {
      return upperBound;
    } else if (currentVal > lowerBound && currentVal < upperBound) {
      return currentVal;
    }
  },
};

// Do not write or modify code below this line.
module.exports = _;
