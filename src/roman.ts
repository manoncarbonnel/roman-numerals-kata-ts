const ROMAN_MAP: Record<number, string> = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
}

const KEYS = Object.keys(ROMAN_MAP).map((key: string) => parseInt(key))

export const roman = (arabicNumber: number): string => {
  const keys = [...KEYS].sort().reverse()
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index]
    if (arabicNumber >= key) {
      return ROMAN_MAP[key] + roman(arabicNumber - key)
    }
  }

  return "I".repeat(arabicNumber)
}
