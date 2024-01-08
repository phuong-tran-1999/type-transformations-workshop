import { Equal, Expect } from '../helpers/type-utils';

interface Attributes {
	firstName: string;
	lastName: string;
	age: number;
	2: boolean;
}

type AttributeGetters = {
	[K in keyof Attributes as `get${Capitalize<string & K>}`]: () => Attributes[K];
};

// type AttributeGettersTest = {
// 	[K in keyof Attributes as `get${Capitalize<K>}`]: () => Attributes[K];
// };

type tests = [
	Expect<
		Equal<
			AttributeGetters,
			{
				getFirstName: () => string;
				getLastName: () => string;
				getAge: () => number;
			}
		>
	>
];
