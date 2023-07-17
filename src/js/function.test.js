import {checkValue} from './function.js';

describe('tests for checkValue function', () => {
    const even = '8';
    const odd = '5';

    it('checkValue = even', () => {
      expect(checkValue(even)).toBe(`Вы ввели "${even}", это число четное`)
    })
    it('checkValue = odd', () => {
      expect(checkValue(odd)).toBe(`Вы ввели "${odd}", это число нечетное`)
    })
    it('checkValue = wrong', () => {
      expect(checkValue('odd')).toBe(`Вы ввели "odd", кажется, вы ошиблись`)
    })
});