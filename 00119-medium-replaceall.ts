// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
    Expect<Equal<ReplaceAll<"foobar", "bar", "foo">, "foofoo">>,
    Expect<Equal<ReplaceAll<"foobar", "bag", "foo">, "foobar">>,
    Expect<Equal<ReplaceAll<"foobarbar", "bar", "foo">, "foofoofoo">>,
    Expect<Equal<ReplaceAll<"t y p e s", " ", "">, "types">>,
    Expect<Equal<ReplaceAll<"foobarbar", "", "foo">, "foobarbar">>,
    Expect<Equal<ReplaceAll<"barfoo", "bar", "foo">, "foofoo">>,
    Expect<Equal<ReplaceAll<"foobarfoobar", "ob", "b">, "fobarfobar">>,
    Expect<Equal<ReplaceAll<"foboorfoboar", "bo", "b">, "foborfobar">>,
    Expect<Equal<ReplaceAll<"", "", "">, "">>
];

// ============= Your Code Here =============
type Concat<A extends string, B extends string> = `${A}${B}`;
type ReplaceAll<
    S extends string,
    F extends string,
    T extends string
> = F extends ""
    ? S
    : S extends `${infer B}${F}${infer R}`
    ? Concat<`${B}${T}`, ReplaceAll<R, F, T>>
    : S;
