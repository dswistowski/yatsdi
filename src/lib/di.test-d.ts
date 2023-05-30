import {test, expectTypeOf} from "vitest";

import {makeContainer, makeToken} from "./di";

test("container bound value should match token type", () => {
    const numericToken = makeToken<number>()
    expectTypeOf(makeContainer().bind(numericToken).toValue).parameter(0).toMatchTypeOf(0)
    expectTypeOf(makeContainer().bind(numericToken).toValue).parameter(0).not.toMatchTypeOf("foo-bar")
})
