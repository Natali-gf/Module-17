import {checkValue} from './function.js';

describe('tests for checkValue function', () => {
    const even = '8';
    const odd = '5';
    const veryBigNumber = '23232323232323232323232323221111'

    it('checkValue returns that entered number is even', () => {
      expect(checkValue(even)).toBe(`Вы ввели "${even}", это число четное`)
    })
    it('checkValue returns that entered number is odd', () => {
      expect(checkValue(odd)).toBe(`Вы ввели "${odd}", это число нечетное`)
    })
    it('checkValue returns message about error input data', () => {
      expect(checkValue('odd')).toBe(`Вы ввели "odd", кажется, вы ошиблись`)
    })
    
    // эту ошибку я выловила действительно с помощью тестов, ведь ранее я думала, что продумала все возможные действия пользователя и обработала возможные ошибки...
    it('checkValue returns wrong calculation', () => {
      expect(checkValue(veryBigNumber)).toBe(`Вы ввели "${veryBigNumber}", это число нечетное`)
    })
});