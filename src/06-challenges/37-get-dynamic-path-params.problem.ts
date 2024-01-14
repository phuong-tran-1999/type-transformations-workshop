import { ar } from 'vitest/dist/reporters-3OMQDZar';
import { Equal, Expect } from '../helpers/type-utils';

type UserPath = '/users/:id';

type UserOrganisationPath = '/users/:id/organisations/:organisationId';

type UserOrganisationAndPositionPath = '/users/:id/organisations/:organisationId/position/:positionId';

type Split<S extends string> = S extends `${infer I}/:${infer ID}/${infer Rest}` ? [ID, ...Split<Rest>] : S extends `${infer I}/:${infer ID}` ? [ID] : [];

type TupleToObject<T extends readonly any[]> = {
	[Key in T[number]]: string;
};

type ExtractPathParams<T extends string> = TupleToObject<Split<T>>;

type tests = [
	Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
	Expect<Equal<ExtractPathParams<UserOrganisationPath>, { id: string; organisationId: string }>>,
	Expect<Equal<ExtractPathParams<UserOrganisationAndPositionPath>, { id: string; organisationId: string; positionId: string }>>
];
