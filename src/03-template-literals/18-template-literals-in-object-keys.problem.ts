import { Equal, Expect } from "../helpers/type-utils";

type TemplateLiteralKey = `${"user" | "post" | "comment"}${"Id" | "Name"}`;

type ObjectOfKeys = { [Key in TemplateLiteralKey]: string };
type ObjectOfKeys2 = Record<TemplateLiteralKey, string>;

type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        userId: string;
        userName: string;
        postId: string;
        postName: string;
        commentId: string;
        commentName: string;
      }
    >
  >,
  Expect<Equal<ObjectOfKeys, ObjectOfKeys2>>
];
