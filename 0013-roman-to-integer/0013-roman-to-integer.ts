type symbolicValueObject = {
  I: number;
  V: number;
  X: number;
  L: number;
  C: number;
  D: number;
  M: number;
};

const symbolicValue: symbolicValueObject = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  const stringList = s.split("");
  let output = 0;
  let index = 0;
  while (index < stringList.length) {
    if (
      symbolicValue[stringList[index]] < symbolicValue[stringList[index + 1]]
    ) {
      output +=
        symbolicValue[stringList[index + 1]] - symbolicValue[stringList[index]];
      index++;
    } else {
      output += symbolicValue[stringList[index]];
    }
    index++;
  }
  return output;
}