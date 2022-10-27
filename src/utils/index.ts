export const randomPickItems = (data: number[], value: number) => {
  let result = new Array(value),
    len = data.length,
    taken = new Array(len);
  if (value > len)
    throw new RangeError("value exceeded number of elements in source array");
  while (value--) {
    let x = Math.floor(Math.random() * len);
    result[value] = data[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

export const isEmpty = (value: any) => {
  return (
    value == null || // From standard.js: Always use === - but obj == null is allowed to check null || undefined
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

export const sortBy = (key: string | number) => {
  return (a: any, b: any) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0);
};

export const epochToData = (value: number) => {
  let date = new Date(value * 1000);
  return date;
};
