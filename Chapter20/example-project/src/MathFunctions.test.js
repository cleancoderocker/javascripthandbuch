import { describe, it, expect } from 'vitest';
import { MathFunctions } from './MathFunctions.js';

describe('MathFunctions.compare', () => {
  it('soll 1 zurückgeben, wenn die erste Zahl größer ist', () => {
    const number1 = 7;
    const number2 = 5;
    const result = MathFunctions.compare(number1, number2);
    expect(result).toBe(1);
  });

  it('soll -1 zurückgeben, wenn die erste Zahl kleiner ist', () => {
    const number1 = 5;
    const number2 = 7;
    const result = MathFunctions.compare(number1, number2);
    expect(result).toBe(-1);
  });

  it('soll einen Fehler werfen, wenn keine Zahlen übergeben wurden', () => {
    expect(() => MathFunctions.compare("5", "5"))
      .toThrow(new TypeError('Nur Zahlen erlaubt.'));
  });

  it('soll 0 zurückgeben, wenn beide Zahlen gleich sind', () => {
    expect(MathFunctions.compare(5, 5)).toBe(0);
  });
});
