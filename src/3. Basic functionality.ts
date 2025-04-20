/* ••[2]•••••••••• 3. Basic functionality.ts ••••••••••••••• */

/* NOTE: TS communication tool, between developer and computer, also developer
and developer, or myself */

/* NOTE: TS is a way to communicate with your teammates not necessarily adding
functionality at runtime */

/* ••[3]••••• Example 1 •••••••••• */
// Lets be really explicit on what we want

const _myVariable: string = 'Hello';

/* ••[3]••••• Example 2 •••••••••• */
// Lets declare our intentions in advance

/* const _myFunction = (firstParam, secondParam) => {
	return firstParam + secondParam;
}; */

/* const _myFunction = (firstParam: any, secondParam: any): any => {
	return firstParam + secondParam;
}; */

/* const myFunction = (firstParam: number, secondParam: number): number => {
	return firstParam + secondParam;
};

myFunction(2, 3);
myFunction('2', '3'); */

/* ••[3]••••• Example 3 •••••••••• */
// We can declare optional parameters or default values

/* const _someFunction = (
	param: string,
	optionalParam?: string,
	defaultValueParam: string = 'Default value',
	// otherParam: string
): string => {
	return param + defaultValueParam + optionalParam;
}; */

/* ••[3]••••• Example 4 •••••••••• */
// We can create on object type definition

/* const _someUser: {
	age: number;
	lastName: string;
	name: string;
	middleName?: string;
} = {
	age: 42,
	lastName: 'Jaimes',
	name: 'Eli',
}; */

/* type User = {
	age: number;
	lastName: string;
	name: string;
	middleName?: string;
};

const _someUser: User = {
	age: 42,
	lastName: 'Jaimes',
	name: 'Eli',
}; */

/* ••[3]••••• Example 5 •••••••••• */
// We can compose complex objects

/* type User = {
	age: number;
	lastName: string;
	name: string;
	middleName?: string;
};

type Employee = User & {
	salary: number;
	// roles: string[];
	roles: Array<string>;
};

const _someEmployee: Employee = {
	age: 42,
	lastName: 'Jaimes',
	name: 'Eli',
	roles: ['developer', 'qa', 'analyst', 'teamLead'],
	// roles: ['developer', 'qa', 'analyst', 'teamLead', "batman"],
	salary: 1000,
}; */

/* ••[3]••••• Example 6 •••••••••• */
// And more complex objects

// type Role = 'developer' | 'qa' | 'analyst' | 'teamLead';

// type User = {
// 	age: number;
// 	lastName: string;
// 	name: string;
// 	middleName?: string;
// };

// type Employee = User & {
// 	salary: number;
// 	// roles: Role[];
// 	roles: Array<Role>;
// };

// const _someEmployee: Employee = {
// 	age: 42,
// 	lastName: 'Jaimes',
// 	name: 'Eli',
// 	roles: ['developer', 'qa', 'analyst', 'teamLead'],
// 	// roles: ['developer', 'qa', 'analyst', 'teamLead', 'batman'],
// 	salary: 1000,
// };

/* ••[3]••••• Example 7 •••••••••• */
// And more complex objects

/* type Role = 'developer' | 'qa' | 'analyst' | 'teamLead';

interface Experience {
	name: string;
	duration: number;
}

type User = {
	age: number;
	lastName: string;
	name: string;
	middleName?: string;
};

type Employee = User & {
	experience: Array<Experience>;
	salary: number;
	roles: Array<Role>;
};

const _someEmployee: Employee = {
	age: 42,
	experience: [
		{
			duration: 3,
			name: 'developer',
		},
		{
			duration: 2,
			name: 'qa',
		},
		{
			duration: 10,
			name: 'batman',
		},
	],
	lastName: 'Jaimes',
	name: 'Eli',
	roles: ['developer', 'qa', 'analyst', 'teamLead'],
	salary: 1000,
}; */

/* ••[3]••••• Example 8 •••••••••• */
// Try to reuse and make it cohesive

/* type Role = 'developer' | 'qa' | 'analyst' | 'teamLead';

interface Experience {
	name: Role;
	duration: number;
}

type User = {
	age: number;
	lastName: string;
	name: string;
	middleName?: string;
};

type Employee = User & {
	experience: Array<Experience>;
	salary: number;
	roles: Array<Role>;
};

const _someEmployee: Employee = {
	age: 42,
	experience: [
		{
			duration: 3,
			name: 'developer',
		},
		{
			duration: 2,
			name: 'qa',
		},
		// {
		// 	duration: 10,
		// 	name: 'batman',
		// },
	],
	lastName: 'Jaimes',
	name: 'Eli',
	roles: ['developer', 'qa', 'analyst', 'teamLead'],
	salary: 1000,
}; */
