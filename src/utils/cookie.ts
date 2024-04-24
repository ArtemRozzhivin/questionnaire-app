export const setCookie = (name: string, value: string, expDays: number) => {
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + date.toUTCString();
  document.cookie = name + '=' + value + '; ' + expires + '; path=/';
};

export const getCookie = (cookieName: string) => {
  let res;
  const name = cookieName + '=';
  const cDecoded = decodeURIComponent(document.cookie);
  const cMass = cDecoded.split('; ');

  cMass.forEach((value) => {
    if (value.indexOf(name) === 0) res = value.substring(name.length);
  });

  return res;
};
