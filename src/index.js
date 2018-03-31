let CHARSET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
CHARSET = index(CHARSET);

// NB: does not validate input
export function encode(int) {
	let charset = CHARSET.byCode;

	if(int === 0) {
		return charset[0];
	}

	let res = "";
	while(int > 0) {
		res = charset[int % 62] + res;
		int = Math.floor(int / 62);
	}
	return res;
}

export function decode(str) {
	let charset = CHARSET.byChar;

	let res = 0;
	let { length } = str;
	for(let i = 0; i < length; i++) {
		let char = str[i];
		res += charset[char] * (62 ** (length - i - 1));
	}
	return res;
}

function index(charset) {
	return charset.split("").reduce((memo, char, i) => {
		memo.byCode[i] = char;
		memo.byChar[char] = i;
		return memo;
	}, {
		byCode: {},
		byChar: {}
	});
}
