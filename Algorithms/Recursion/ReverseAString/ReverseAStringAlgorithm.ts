export const reverseAStringRecursively = (str: string): string => {
  if (str.length <= 1) {
    return str;
  }

  return `${str.charAt(str.length - 1)}${reverseAStringRecursively(str.substring(0, str.length - 1))}`
};

export const reverseAStringIteratively = (str: string): string => {
  let result = ``;
  
  for (let index = str.length - 1; index >= 0; index--) {
    result += str.charAt(index);
  }
  
  return result;
};