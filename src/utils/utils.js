export const sorting = (arr, value) => {
  const sortedArr =  [...arr].sort((a,b) =>
    a[value] > b[value] ? 1 : -1
  );
  return sortedArr;
}