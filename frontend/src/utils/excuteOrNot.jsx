export function executeOrNot(condition, funct, ...parameters) {
    if(condition === true) {
      return funct(...parameters)
    }
  }