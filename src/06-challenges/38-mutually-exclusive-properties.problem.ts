import { Equal, Expect } from '../helpers/type-utils';

interface Attributes {
	id: string;
	email: string;
	username: string;
	phone: number;
}

/**
 * How do we create a type helper that represents a union
 * of all possible combinations of Attributes?
 */
type MutuallyExclusive<T> = {
	[K in keyof T]: { [A in K]: T[K] };
}[keyof T];

type ExclusiveAttributes = MutuallyExclusive<Attributes>;

type tests = [
	Expect<
		Equal<
			ExclusiveAttributes,
			| {
					id: string;
			  }
			| {
					email: string;
			  }
			| {
					username: string;
			  }
			| { phone: number }
		>
	>
];
