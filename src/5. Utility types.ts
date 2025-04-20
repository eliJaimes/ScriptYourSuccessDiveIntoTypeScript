/* ••[2]•••••••••• 5. Utility types.ts ••••••••••••••• */

/* NOTE: in TS a generic is a way to create reusable components that can work
with a variety of data types, they act as a "placeholder" for types */

/* ••[3]••••• Example 1 •••••••••• */
// Partial<Type>

interface Todo {
	description: string;
	title: string;
}

const _todo: Todo = {
	description: 'some description',
	title: 'some title',
};

const _partialTodo: Todo = {
	// const _partialTodo: Partial<Todo> = {
	description: 'some description',
};

/* ••[3]••••• Example 2 •••••••••• */
// Required<Type>

// interface Properties {
//   a?: number;
//   b?: number;
// }

// const _properties: Properties = {
// 	a: 1,
// }

// const _requiredProperties: Required<Properties> = {
// 	a: 1,
// 	// b: 2
// }

/* ••[3]••••• Example 3 •••••••••• */
// Readonly<Type>

// interface User {
// 	name: string;
// }

// const _user: Readonly<User> = {
// 	name: 'some name',
// };

// // _user.name = "Eli Jaimes";

/* ••[3]••••• Example 4 •••••••••• */
// Pick<Type, Keys>

// interface Todo {
// 	title: string;
// 	description: string;
// 	completed: boolean;
// }

// type PickTodo = Pick<Todo, 'title' | 'completed'>;
// //   ^?

/* ••[3]••••• Example 5 •••••••••• */
// Omit<Type, Keys>

// interface Todo {
// 	title: string;
// 	description: string;
// 	completed: boolean;
// }

// type OmitTodo = Omit<Todo, 'description'>;
// //   ^?

/* ••[3]••••• Example 6 •••••••••• */
// Record<Keys, Type>

// type Role = 'developer' | 'qa' | 'analyst' | 'teamLead';

// interface RoleDetails {
// 	name: string;
// 	age: number;
// }

// type Team = Record<Role, RoleDetails>;
// //   ^?

// const _team: Team = {
// 	analyst: { age: 20, name: 'some analyst' },
// 	developer: { age: 30, name: 'some developer' },
// 	qa: { age: 40, name: 'some qa' },
// 	teamLead: { age: 50, name: 'some teamLead' },
// };

/* ••[3]••••• Example 7 •••••••••• */
// Uppercase<StringType>
// Lowercase<StringType>
// Capitalize<StringType>
// Uncapitalize<StringType>

// type SomeString = 'This is some string';

// type _MyUppercase = Uppercase<SomeString>;
// //   ^?
// type _MyLowercase = Lowercase<SomeString>;
// //   ^?
// type _MyCapitalize = Capitalize<SomeString>;
// //   ^?
// type _MyUncapitalize = Uncapitalize<SomeString>;
// //   ^?
