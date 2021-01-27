const obfuscate = function (string) {
  let splitString = string.split("");
  for (let x = 0; x < splitString.length; x++) {
    if (splitString[x] === 'a') {
      splitString.splice(x, 1, '4');
    } else if (splitString[x] === 'e') {
      splitString.splice(x, 1, '3');
    } else if (splitString[x] === 'o') {
      splitString.splice(x, 1, '0');
    } else if (splitString[x] === 'l') {
      splitString.splice(x, 1, '1')
    }
  }
  let finalString = splitString.join("");
  console.log(finalString);
}

obfuscate("password");
obfuscate("abracadabra");
obfuscate("audaciously");