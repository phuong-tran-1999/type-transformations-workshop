import { Equal, Expect } from '../helpers/type-utils';

type Route = '/' | '/about' | '/admin' | '/admin/users';

type RoutesObject = {
	[Key in Route]: Key;
};

type MappedTypeTest<T> = {
	[key: string]: T;
};

const a: MappedTypeTest<'a' | 'b'> = {
	masd: 'b',
};

type tests = [
	Expect<
		Equal<
			RoutesObject,
			{
				'/': '/';
				'/about': '/about';
				'/admin': '/admin';
				'/admin/users': '/admin/users';
			}
		>
	>
];
