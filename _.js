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
      let temp;

      temp = start;
      start = end;
      end = temp;

      start = 0;
    }

    if (start > end) {
      temp = start;
      start = end;
      end = temp;
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

    if (currentVal === start) {
      return true;
    }

    if (currentVal == end) {
      return false;
    }
  },

  words(string) {
    return string.split(" ");
  },

  pad(string, length) {
    debugger;
    if (string.length >= length) {
      return string;
    }

    const startPaddingLength = Math.floor((length - string.length) / 2);
    const endPaddingLength = length - string.length - startPaddingLength;
    const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);

    return paddedString;
  },

  has(object, key) {
    const hasValue = object[key];
    if (hasValue !== undefined) {
      return true;
    } else {
      return false;
    }
  }
};



const car = {
  make: 'toyota',
  model: 'camry',
  year: 2014
}


// Do not write or modify code below this line.
module.exports = _;
