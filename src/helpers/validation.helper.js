export function hasAnySpaces(str) {
  const regAnySpaces = /\s/;

  return regAnySpaces.test(str);
}

export function limitText(value = "", limitNum = 25) {
  let result = value;

  if (value.length > limitNum) {
    result = value.slice(0, limitNum);
  }

  return result;
}

export function isValidEmail(str = "") {
  let result = false;

  const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    (str.endsWith("@ysumail.am") ||
      str.endsWith("@ysu.am") ||
      str === process.env.REACT_APP_ADM) &&
    regEmail.test(str)
  ) {
    result = true;
  }

  return result;
}
