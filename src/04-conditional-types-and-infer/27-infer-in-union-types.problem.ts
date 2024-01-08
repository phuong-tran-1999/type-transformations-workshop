import { Equal, Expect } from '../helpers/type-utils';

const parser1 = {
	parse: () => 1,
};

const parser2 = () => '123';

const parser3 = {
	extract: () => true,
};

type p1T = typeof parser1;
type p2T = typeof parser2;
type p3T = typeof parser3;

type GetParserResult<T> = T extends { parse: () => infer TReturn } | (() => infer TReturn) | { extract: () => infer TReturn } ? TReturn : never;

type tests = [Expect<Equal<GetParserResult<typeof parser1>, number>>, Expect<Equal<GetParserResult<typeof parser2>, string>>, Expect<Equal<GetParserResult<typeof parser3>, boolean>>];
