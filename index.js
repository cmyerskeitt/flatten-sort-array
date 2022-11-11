function flattenAndSort(array) {
    let flatten = array.flat()
    return flatten.sort((a,b) => a-b)
   }