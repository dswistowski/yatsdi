interface Token<T> {}
export function makeToken<T>(): Token<T> {
  return {};
}

export function makeContainer() {
  return {
    bind<T>(token: Token<T>) {
      return {
        toValue(value: T) {},
      };
    },
    get(token: Token<any>) {
      return "hello";
    },
  };
}
