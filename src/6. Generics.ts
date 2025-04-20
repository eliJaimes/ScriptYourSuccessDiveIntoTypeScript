/* ••[2]•••••••••• 6. Generics.ts ••••••••••••••• */

/* NOTE: in TS generics can be compared to placeholders that allow flexibility
while maintaining type safety. */

/* ••[3]••••• Example 1 •••••••••• */
// 'T' represents a "type variable" that adapts based on the input.

interface NumberBox {
	content: number;
	name: string;
}

interface StringBox {
	content: string;
	name: string;
}

interface BooleanBox {
	content: boolean;
	name: string;
}

interface Box<T> {
	content: T;
	name: string;
}

const _numberBox1: NumberBox = {
	content: 1,
	name: 'numberBox1',
};

const _numberBox2: Box<number> = {
	content: 2,
	name: 'numberBox2',
};

/* ••[3]••••• Example 2 •••••••••• */
// Generics enforce type safety while retaining flexibility

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const identityWithoutTypeSafety = (value: any): any => {
// 	return value;
// };

// // eslint-disable-next-line @typescript-eslint/typedef
// const _callIdentityWithoutTypeSafety = identityWithoutTypeSafety('hello'); // =>

// const identity = <T>(value: T): T => {
// 	return value;
// };

// // eslint-disable-next-line @typescript-eslint/typedef
// const _callIdentity1 = identity(42); // =>
// // eslint-disable-next-line @typescript-eslint/typedef
// const _callIdentity2 = identity('hello'); // =>

/* ••[3]••••• Example 3 •••••••••• */
// We can enforce constraints on the generic param. (T extends) ensure T meets
// specific requirements.

// interface HasLength {
// 	length: number;
// }

// const logLength = <T extends HasLength>(item: T): void => {
// 	console.log(item.length);
// };

// logLength('hello'); // =>
// logLength([1, 2, 3]); // =>
// logLength(42);
// // ^?

/* ••[3]••••• Example 4 •••••••••• */
// Classes can use generic slots for added flexibility

// class Pair<T, U> {
// 	public constructor(
// 		public first: T,
// 		public second: U,
// 	) {}
// }

// /* NOTE: Explicit se types in the variable */
// const _pair1: Pair<string, number> = new Pair<string, number>('hello', 42);
// //    ^?

// /* NOTE: Explicit set types in the generic slots */
// // eslint-disable-next-line @typescript-eslint/typedef
// const _pair2 = new Pair<string, number>('hello', 42);
// //    ^?

// /* NOTE: Using type argument inference */
// // eslint-disable-next-line @typescript-eslint/typedef
// const _pair3 = new Pair('hello', 42);
// //    ^?

/* ••[3]••••• Example 5 •••••••••• */
// We can use generics to crate other types

// type IsString<T> = T extends string ? T : never;

// type MyStringType = 'some string';
// type MyNumberType = 5;

// type Test1 = IsString<MyStringType>; // =>
// type Test2 = IsString<MyNumberType>; // =>
