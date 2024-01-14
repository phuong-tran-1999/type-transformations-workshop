import { Equal, Expect } from '../helpers/type-utils';

interface Values {
	email: string;
	firstName: string;
	lastName: string;
}

type ObjectTuple = {
	[K in keyof Values]: [K, Values[K]];
};

type ObjectTupleUnion = {
	[K in keyof Values]: [K, Values[K]];
}[keyof Values];

type ValuesAsUnionOfTuples = ObjectTuple[keyof ObjectTuple];

type tests = [
	Expect<Equal<ValuesAsUnionOfTuples, ['email', string] | ['firstName', string] | ['lastName', string]>>,
	Expect<Equal<ObjectTupleUnion, ['email', string] | ['firstName', string] | ['lastName', string]>>
];
