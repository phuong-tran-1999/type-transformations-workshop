import { Equal, Expect } from '../helpers/type-utils';

interface Example {
	name: string;
	age: number;
	id: string;
	organisationId: string;
	groupId: string;
}

type ExcludeNonIdKey<T> = Extract<T, 'id' | `${string}Id`>;

type OnlyIdKeys<T> = {
	[K in ExcludeNonIdKey<keyof T>]: T[K];
};

type test = OnlyIdKeys<Example>;

type tests = [
	Expect<
		Equal<
			OnlyIdKeys<Example>,
			{
				id: string;
				organisationId: string;
				groupId: string;
			}
		>
	>,
	Expect<Equal<OnlyIdKeys<{}>, {}>>
];
