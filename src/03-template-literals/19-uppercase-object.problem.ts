import { Equal, Expect } from "../helpers/type-utils";

type Event = `log_in` | "log_out" | "sign_up";

type ObjectOfKeys = Record<Uppercase<Event>, string>;
type ObjectOfKeys2 = { [Key in Event as Uppercase<Key>]: string };

type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        LOG_IN: string;
        LOG_OUT: string;
        SIGN_UP: string;
      }
    >
  >,
  Expect<Equal<ObjectOfKeys, ObjectOfKeys2>>
];
