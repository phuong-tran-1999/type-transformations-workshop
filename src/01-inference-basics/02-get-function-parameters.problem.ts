import { Equal, Expect } from "../helpers/type-utils";

const makeQuery = (
  url: string,
  opts?: {
    method?: string;
    headers?: {
      [key: string]: string;
    };
    body?: string;
  },
) => {};

type MakeQueryParameters = Parameters<typeof makeQuery>;
type MakeQueryOptsParameters = MakeQueryParameters[1];
type MakeQueryUrlParameters = MakeQueryParameters[0];

type tests = [
  Expect<
    Equal<
      MakeQueryParameters,
      [
        url: string,
        opts?: {
          method?: string;
          headers?: {
            [key: string]: string;
          };
          body?: string;
        }
      ]
    >
  >,

  Expect<
    Equal<
      MakeQueryOptsParameters,
      | {
          method?: string;
          headers?: {
            [key: string]: string;
          };
          body?: string;
        }
      | undefined
    >
  >,

  Expect<Equal<MakeQueryUrlParameters, string>>
];
