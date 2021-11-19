module.exports = function toBeMatchAllText(props, texts) {
  let isMatchText = true;
  let noMatchTexts = [];
  for (const text of texts) {
    try {
      props.getByText(text);
    } catch {
      isMatchText = false;
      noMatchTexts.push(text);
    }
  }
  if (isMatchText) {
    return {
      message: () => 'success',
      pass: true,
    };
  }
  return {
    message: () => `not match some text "${noMatchTexts.join(', ')}"`,
    pass: false,
  };
}