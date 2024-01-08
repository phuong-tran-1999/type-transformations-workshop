import { Equal, Expect } from '../helpers/type-utils';

type GetDataValue<T> = T extends { data: infer F } ? F : never;

type GetFunctionReturnType<T> = T extends (...arg: any[]) => any ? true : false;
type GetFunctionReturnType2<T> = T extends (...arg: Array<infer A>) => infer B ? [A, B] : unknown;

const test: GetFunctionReturnType<(a: string, b: string) => string> | undefined = undefined;
const test2: GetFunctionReturnType<number> | undefined = undefined;
const test3: GetFunctionReturnType2<(a: boolean, b: boolean) => string> | undefined = undefined;

type tests = [
	Expect<Equal<GetDataValue<{ data: 'hello' }>, 'hello'>>,
	Expect<Equal<GetDataValue<{ data: { name: 'hello' } }>, { name: 'hello' }>>,
	Expect<Equal<GetDataValue<{ data: { name: 'hello'; age: 20 } }>, { name: 'hello'; age: 20 }>>,

	// Expect that if you pass in string, it should return never
	Expect<Equal<GetDataValue<string>, never>>,
	Expect<Equal<GetDataValue<number>, never>>
];
