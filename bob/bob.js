

export const hey = (message) => {
  const mTrim = message.trim();
  const isUpperCase = mTrim == mTrim.toUpperCase();
  const isQuestion = mTrim.match(/\?$/i);
  const isUpperChar = mTrim.match(/[A-Z]/);
  const isActuallySaying = mTrim.match(/[a-z]|[0-9]/i);

  if (isQuestion && isUpperCase && isUpperChar) {
    return 'Calm down, I know what I\'m doing!';
  }

  if (isQuestion) {
    return 'Sure.';
  }

  if (!isActuallySaying) {
    return 'Fine. Be that way!';
  }

  if (isUpperCase && isUpperChar) {
    return 'Whoa, chill out!';
  }
  return 'Whatever.';
};
