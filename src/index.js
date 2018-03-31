let CHARSET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// NB: does not validate input
export function encode(int) {
	if(int === 0) {
		return CHARSET[0];
	}

	let res = "";
	while(int > 0) {
		res = CHARSET[int % 62] + res;
		int = Math.floor(int / 62);
	}
	return res;
}

export function decode(str) {
	let res = 0;
	let { length } = str;
	for(let i = 0; i < length; i++) {
		res += CHARSET.indexOf(str[i]) * (62 ** (length - i - 1));
	}
	return res;
}
