module.exports = function check(str, bracketsConfig) {
  let arrForCheck = str.split("");

  if (arrForCheck.length % 2 != 0) {
    return false;
  }

  let stackArr = [];
  arrForCheck.forEach(element => {
    for (let i = 0; i < bracketsConfig.length; i++) {
      let startBracket = bracketsConfig[i][0];
      let closingBracket = bracketsConfig[i][1];

      switch (element) {
        case startBracket:
          if (startBracket === closingBracket && stackArr[stackArr.length - 1] === startBracket) {
            stackArr.pop();
            break;
          } else {
            stackArr.push(element);
            break;
          }
        case closingBracket:
          if (stackArr[stackArr.length - 1] === startBracket) {
            stackArr.pop();
            break;
          } else {
            return false;
          }
      }
    }
  });
  return stackArr.length === 0;
}
