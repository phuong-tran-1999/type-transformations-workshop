import { Equal, Expect } from '../helpers/type-utils';

type Fruit =
	| {
			name: 'apple';
			color: 'red';
	  }
	| {
			name: 'banana';
			color: 'yellow';
	  }
	| {
			name: 'orange';
			color: 'orange';
	  };

type TransformedFruitOriginal = {
	[K in Fruit as K['name']]: `${K['name']}:${K['color']}`;
}[Fruit['name']];

type TransformedFruit<T extends { name: string; color: string }> = {
	[K in T as K['name']]: `${K['name']}:${K['color']}`;
}[T['name']];

type tests = [Expect<Equal<TransformedFruit<Fruit>, 'apple:red' | 'banana:yellow' | 'orange:orange'>>, Expect<Equal<TransformedFruitOriginal, 'apple:red' | 'banana:yellow' | 'orange:orange'>>];
