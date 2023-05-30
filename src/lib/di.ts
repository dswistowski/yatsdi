interface Token<T> {}
export function makeToken<T>(): Token<T> {
  return {};
}

export function makeContainer() {
  return {
    bind(token: Token<any>) {
      return {
        toValue(value: any) {},
      };
    },
    get(token: Token<any>) {
      return "hello";
    },
  };
}
