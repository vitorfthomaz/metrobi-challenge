console.log('\nQuestion 3')

export const verifyBrackets = (input: string) => {
  const aux = {
    paren: 0,
    sqrBr: 0,
    curBr: 0
  }

  const injectionArr = input.split("").map((item) => {
    const lookupTable: {
      [x: string]: () => number;
    } = {
      "(": () => aux.paren += 1,
      ")": () => aux.paren -= 1,
      "[": () => aux.sqrBr += 1,
      "]": () => aux.sqrBr -= 1,
      "{": () => aux.curBr += 1,
      "}": () => aux.curBr -= 1,
      default: () => 0,
    }

    return lookupTable[item] || lookupTable.default
  })

  for (let i = 0; i < injectionArr.length; i++) {
    injectionArr[i]()
    if (aux.paren < 0 || aux.sqrBr < 0 || aux.curBr < 0) break
  }

  if (aux.paren !== 0 || aux.sqrBr !== 0 || aux.curBr !== 0) {
    console.log(`${input} -> Invalid`)
    return false
  }
  console.log(`${input} -> Valid`)
  return true
}

verifyBrackets('(')
verifyBrackets('()({})')
verifyBrackets('([])(}{])')