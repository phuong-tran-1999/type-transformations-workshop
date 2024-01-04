import { Equal, Expect } from '../helpers/type-utils';

type Maybe<T> = T | null | undefined;
// type Maybe2<T> = Partial<T>;

type tests = [
	Expect<Equal<Maybe<string>, string | null | undefined>>,
	Expect<Equal<Maybe<number>, number | null | undefined>>,
	Expect<Equal<Maybe<boolean>, boolean | null | undefined>>,
	Expect<Equal<Maybe<null>, null | undefined>>
	// Expect<Equal<Maybe2<string>, string | null | undefined>>,
	// Expect<Equal<Maybe2<number>, number | null | undefined>>,
	// Expect<Equal<Maybe2<boolean>, boolean | null | undefined>>,
	// Expect<Equal<Maybe2<null>, null | undefined>>
];
