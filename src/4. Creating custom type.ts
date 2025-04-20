/* ••[2]•••••••••• 4. Creating custom type.ts ••••••••••••••• */

/* NOTE: In Ts we can create custom types with 'interface' and 'type', there are
key differences between them */

/* ••[3]••••• Example 1 •••••••••• */
// Basic definition

type UserType = {
	name: string;
	lastName: string;
};

interface UserInterface {
	name: string;
	lastName: string;
}

/* ••[3]••••• Example 2 •••••••••• */
// Extensibility

/* type ExtendedUserType = UserType & { age: number };
//   ^?

const userByType: ExtendedUserType = {
	age: 42,
	lastName: 'Jaimes',
	name: 'Eli',
};

/* INFO: here we are using 'declaration merging' to extend the interface */
// interface UserInterface {
// 	age: number;
// }

// const userByInterface: UserInterface = {
// 	age: 42,
// 	lastName: 'Jaimes',
// 	name: 'Eli',
// };

// interface ExtendedUserInterface extends UserInterface {
// 	age: number;
// }

// const userByInterface: ExtendedUserInterface = {
// 	age: 42,
// 	lastName: 'Jaimes',
// 	name: 'Eli',
// }; */

/* HACK: We are using 'Twoslash Query Comments' VSC extension to visualize a TS
type */

/* ••[3]••••• Example 3 •••••••••• */

/* type SomeType = 'A' | 'B' | 'C';
type OtherType = string | number; */
