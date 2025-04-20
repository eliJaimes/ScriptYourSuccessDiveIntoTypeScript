/* ••[2]•••••••••• 2. Typescript as a linter.ts ••••••••••••••• */

/* NOTE: TypeScript can act as a linter by enforcing stricter code checks during
development. */

/* NOTE: TypeScript also helps catch potential errors before runtime by
analyzing code syntax, types, and structure. */

/* HACK: TypeScript integrates seamlessly with external linters like ESLint.
Together, they enforce coding conventions alongside TypeScript's type checks. We
are using 'Error Lens' VSC extension to render error in out opened editor */

/* ••[3]••••• Example 1 •••••••••• */

// .eslintrc.js - Error: @typescript-eslint/typedef,
// Warning: @typescript-eslint/no-unused-vars
const someNumber = 5;

// .eslintrc.js - Warning: @typescript-eslint/no-unused-vars
// const someNumber: number = 5;

// All good
// const _someNumber: number = 5;

/* TODO: We could and should integrate TS as part of our CI/CD environment to
check and validate our code before merge it or push it to production */
