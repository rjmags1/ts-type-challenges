// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

interface Cat {
    type: "cat";
    breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
    type: "dog";
    breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
    color: "brown" | "white" | "black";
}

type Animal = Cat | Dog;

type cases = [
    Expect<Equal<LookUp<Animal, "dog">, Dog>>,
    Expect<Equal<LookUp<Animal, "cat">, Cat>>
];

// ============= Your Code Here =============
type HasTypeProp = { type: string };

type LookUp<U extends HasTypeProp, T extends string> = U extends { type: T }
    ? U
    : never;
