function isValidPassword(password, username) {
  const isRightLength = password.length >= 8;
  const hasSpaces = password.includes(' ');
  const hasUsername = password.includes(username);

  return isRightLength && !hasSpaces && !hasUsername;
}

console.log(isValidPassword('89Fjjlnms', 'dogLuvr'));
console.log(isValidPassword('dogLuvr123!', 'dogLuvr'));
