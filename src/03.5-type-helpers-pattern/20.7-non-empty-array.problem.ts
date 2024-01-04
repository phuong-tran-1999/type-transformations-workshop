type NonEmptyArray<T> = [T, ...T[]];
type NonEmptyStringArray = [string, ...string[]];

export const makeEnum = (values: NonEmptyArray<string>) => {};

export const makeEnum2 = (values: NonEmptyStringArray) => {};

makeEnum(['a']);
makeEnum(['a', 'b', 'c']);

makeEnum2(['a']);
makeEnum2(['a', 'b', 'c']);

// @ts-expect-error
makeEnum([]);

// @ts-expect-error
makeEnum2([]);
