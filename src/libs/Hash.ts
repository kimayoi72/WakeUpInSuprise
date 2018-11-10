function reduce(previousHash: number, code: number) {
  return previousHash + ((previousHash << 7) + (previousHash << 3) ^ code)
}

export function hashCode(s:string) {
  return s
    .split('')
    .map(char => char.charCodeAt(0))
    .reduce(reduce, 5381)
}

export function hashId(s:string) {
  return "_id_".concat(Math.abs(hashCode(s)).toString(36))
}
