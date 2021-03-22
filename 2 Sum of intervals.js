const arraySort = (arr) => {
  const sortArray = [...arr];
  let swapped;
  let stepsCount = sortArray.length - 1;
  do {
    swapped = false;
    for (let i = 0; i < stepsCount; i += 1) {
      if (sortArray[i][0] > sortArray[i + 1][0]) {
        const temp = sortArray[i];
        sortArray[i] = sortArray[i + 1];
        sortArray[i + 1] = temp;
        swapped = true;
      }
    }
    stepsCount -= 1;
  } while (swapped);
  return sortArray;
};

const count = (first, second) => {
  let answer = 0;
  if (Math.sign(first) !== Math.sign(second)) {
    answer = Math.abs(first) + second;
  } else {
    answer = second - first;
  }
  return answer;
};

const sumIntervals = (arr) => {
  const unsortedIntervals = [...arr];
  // GUARD EXPRESSION
  if (unsortedIntervals.length === 1) {
    return count(unsortedIntervals[0][0], unsortedIntervals[0][1]);
  }
  // SORTING
  let intervals = arraySort(unsortedIntervals);
  // NORMALIZING
  let isFinished = true;
  let i = 0;
  do {
    if (intervals[i + 1][0] < intervals[i][1]) {
      if (intervals[i + 1][1] < intervals[i][1]) {
        // this interval is inside another interval,
        // so it's need to be deleted from the list.
        const buf = [];
        for (const item of intervals) {
          if (item === intervals[i + 1]) {
            continue;
          }
          buf.push(item);
        }
        intervals = [...buf];
        if (i >= intervals.length - 1) {
          isFinished = false;
        }
      } else {
        intervals[i + 1][0] = intervals[i][1];
        if (i >= intervals.length - 2) {
          isFinished = false;
        } else i += 1;
      }
    } else {
      if (i >= intervals.length - 2) {
        isFinished = false;
      } else i += 1;
    }
  } while (isFinished);
  let sum = 0;
  for (const num of intervals) {
    sum += count(num[0], num[1]);
  }
  return sum;
};

export default sumIntervals;
