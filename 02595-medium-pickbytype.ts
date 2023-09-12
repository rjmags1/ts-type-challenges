// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

interface Model {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
}

type cases = [
    Expect<
        Equal<
            PickByType<Model, boolean>,
            { isReadonly: boolean; isEnable: boolean }
        >
    >,
    Expect<Equal<PickByType<Model, string>, { name: string }>>,
    Expect<Equal<PickByType<Model, number>, { count: number }>>
];

// ============= Your Code Here =============
type PickByType<T extends { [key: PropertyKey]: any }, U> = {
    [K in keyof T as K extends keyof T
        ? T[K] extends U
            ? K
            : never
        : never]: T[K];
};
