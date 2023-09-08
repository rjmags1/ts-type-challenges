// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
    Expect<Equal<KebabCase<"FooBarBaz">, "foo-bar-baz">>,
    Expect<Equal<KebabCase<"fooBarBaz">, "foo-bar-baz">>,
    Expect<Equal<KebabCase<"foo-bar">, "foo-bar">>,
    Expect<Equal<KebabCase<"foo_bar">, "foo_bar">>,
    Expect<Equal<KebabCase<"Foo-Bar">, "foo--bar">>,
    Expect<Equal<KebabCase<"ABC">, "a-b-c">>,
    Expect<Equal<KebabCase<"-">, "-">>,
    Expect<Equal<KebabCase<"">, "">>,
    Expect<Equal<KebabCase<"😎">, "😎">>
];

// ============= Your Code Here =============
type KebabCase<S extends string> = S extends ""
    ? S
    : S extends `${infer F}${infer R}`
    ? F extends UppercaseLetters
        ? CutFirst<Dashed<S>>
        : Dashed<S>
    : never;

type CutFirst<S extends string> = S extends ""
    ? S
    : S extends `${infer F}${infer R}`
    ? R
    : never;

type Dashed<S extends string> = S extends ""
    ? S
    : S extends `${infer F}${infer R}`
    ? F extends UppercaseLetters
        ? `-${Lowercase<F>}${Dashed<R>}`
        : `${F}${Dashed<R>}`
    : never;

type Test = KebabCase<"">;

type UppercaseLetters =
    | "A"
    | "B"
    | "C"
    | "D"
    | "E"
    | "F"
    | "G"
    | "H"
    | "I"
    | "J"
    | "K"
    | "L"
    | "M"
    | "N"
    | "O"
    | "P"
    | "Q"
    | "R"
    | "S"
    | "T"
    | "U"
    | "V"
    | "W"
    | "X"
    | "Y"
    | "Z";
