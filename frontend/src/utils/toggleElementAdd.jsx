export function toggleElementAdd(elem, array, conditionExists) {
    array = array ? array : []

    if(conditionExists){
      return array.filter(e => e !== elem)
    }
    return [...array, elem]
  }