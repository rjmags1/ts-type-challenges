// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
    Expect<Equal<TupleToNestedObject<["a"], string>, { a: string }>>,
    Expect<
        Equal<TupleToNestedObject<["a", "b"], number>, { a: { b: number } }>
    >,
    Expect<
        Equal<
            TupleToNestedObject<["a", "b", "c"], boolean>,
            { a: { b: { c: boolean } } }
        >
    >,
    Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>
];

// ============= Your Code Here =============
type TupleToNestedObject<T extends string[], U> = T extends []
    ? U
    : T extends [infer F extends string, ...infer R extends string[]]
    ? { [key in F]: TupleToNestedObject<R, U> }
    : never;

type X = TupleToNestedObject<["a", "b"], number>;
