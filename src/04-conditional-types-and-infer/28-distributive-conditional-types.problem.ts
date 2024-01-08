import { Equal, Expect } from '../helpers/type-utils';

type Fruit = 'apple' | 'banana' | 'orange';

// type AppleOrBanana<T> = Fruit extends 'apple' | 'banana' ? Fruit : never;

type AppleOrBanana2<T> = T extends 'apple' | 'banana' ? T : never;

type tests = [
	// Expect<Equal<AppleOrBanana, 'apple' | 'banana'>>,
	Expect<Equal<AppleOrBanana2<Fruit>, 'apple' | 'banana'>>
];
