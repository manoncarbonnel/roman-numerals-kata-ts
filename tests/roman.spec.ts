import { roman } from "../src/roman"

// Roman Numerals Kata
//
// I = 1, V = 5, X = 10, XL = 40,
// L = 50, C = 100, D = 500 et M = 1000

describe("Roman numerals converter", () => {
  const expectCase = (arabicNumber: number, romanNumber: string) =>
    expect(roman(arabicNumber)).toBe(romanNumber)

  test.each([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"],
    [1984, "MCMLXXXIV"],
    [3999, "MMMCMXCIX"],
  ])("It should convert %i to '%s'", expectCase)
})
