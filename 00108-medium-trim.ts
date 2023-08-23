// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
    Expect<Equal<Trim<"str">, "str">>,
    Expect<Equal<Trim<" str">, "str">>,
    Expect<Equal<Trim<"     str">, "str">>,
    Expect<Equal<Trim<"str   ">, "str">>,
    Expect<Equal<Trim<"     str     ">, "str">>,
    Expect<Equal<Trim<"   \n\t foo bar \t">, "foo bar">>,
    Expect<Equal<Trim<"">, "">>,
    Expect<Equal<Trim<" \n\t ">, "">>
];

// ============= Your Code Here =============
type Whitespace = " " | "\n" | "\t";
type Trim<S extends string> = S extends `${Whitespace}${infer R}`
    ? Trim<R>
    : S extends `${infer R}${Whitespace}`
    ? Trim<R>
    : S;
