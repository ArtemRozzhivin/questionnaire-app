export const validateString = (input: string) => {
  const cyrillicRegex = /[а-яА-Я]/;
  const specialCharactersRegex = /[!@#$%^*+={}[\];'"<>?]/;
  const twoSpecialCharactersRegex = /([&]{2})/;

  if (cyrillicRegex.test(input)) {
    return { error: false, message: 'Cyrillic characters are not allowed' };
  }

  if (specialCharactersRegex.test(input)) {
    return { error: false, message: 'Special characters are not allowed' };
  }

  if (twoSpecialCharactersRegex.test(input)) {
    return { error: false, message: 'Two special characters are not allowed' };
  }

  return null;
};
