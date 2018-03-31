/* global describe, it */
import { encode, decode } from "../";
import assert from "assert";

let assertSame = assert.strictEqual;

describe("Base62 codec", _ => {
	it("should encode numbers", () => {
		assertSame(encode(0), "0");
		assertSame(encode(7), "7");
		assertSame(encode(16), "g");
		assertSame(encode(238327), "ZZZ");
	});

	it("should decode strings", () => {
		assertSame(decode("0"), 0);
		assertSame(decode("7"), 7);
		assertSame(decode("g"), 16);
		assertSame(decode("ZZZ"), 238327);
	});
});
