const array = [2, 6, 8, 4, 2];
const counts = array.map((item, index) => {
  let count = 0;
  for (let i = index + 1; i < array.length; i++) {
    if (item > array[i]) {
      count++;
    }
  }
  return count;
});

console.log(counts);
