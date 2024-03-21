export const minBy = <T>(array: T[], cb: (elem: T) => number) => {
  if (array.length === 0) {
    return undefined;
  } else if (array[0] !== undefined) {
    return array.reduce(
      (min: T, current: T) => (cb(current) < cb(min) ? current : min),
      array[0]
    );
  }
};

export const maxBy = <T>(array: T[], cb: (elem: T) => number) => {
  if (array.length === 0) {
    return undefined;
  } else if (array[0] !== undefined) {
    return array.reduce(
      (min: T, current: T) => (cb(current) > cb(min) ? current : min),
      array[0]
    );
  }
};
