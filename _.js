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

  inRange(currentVal, start, end) {
    if (typeof end === "undefined") {
    }

    if (currentVal === start) {
      return true;
    }

    if (currentVal == end) {
      return false;
    }

    if (typeof end !== "undefined") {
      if (currentVal < start) {
        return false;
      } else if (currentVal > end) {
        return false;
      } else if (currentVal > start && currentVal < end) {
        return true;
      }
    }
  },
};

// Do not write or modify code below this line.
module.exports = _;
