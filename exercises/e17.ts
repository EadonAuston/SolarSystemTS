export const minBy = (
  array: { age: number }[],
  cb: (elem: { age: number }) => number
) => {
  if (array.length === 0) {
    return undefined;
  } else if (array[0] !== undefined) {
    return array.reduce(
      (min: { age: number }, current: { age: number }) =>
        cb(current) < cb(min) ? current : min,
      array[0]
    );
  }
};

export const maxBy = (
  array: { age: number }[],
  cb: (elem: { age: number }) => number
) => {
  if (array.length === 0) {
    return undefined;
  } else if (array[0] !== undefined) {
    return array.reduce(
      (min: { age: number }, current: { age: number }) =>
        cb(current) > cb(min) ? current : min,
      array[0]
    );
  }
};
