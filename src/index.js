export function checkValue(value) {
	let error = 'Вы не ввели значение';
	if (typeof value !== 'string'){
		return error;
	};
	value = value.replace(/ /g,'');
	if (value === ''){
		return error;
	} else {
		let valueNum = value;
		+valueNum;
		if (isNaN(valueNum)) {
			return `Вы ввели "${value}", кажется, вы ошиблись`;
		} else if (valueNum % 2 === 0) {
			return `Вы ввели "${value}", это число четное`;
		} else {
			return `Вы ввели "${value}", это число нечетное`;
		};
	};
}