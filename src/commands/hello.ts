import consola from "consola";

/**
 * greet関数は、nameを受け取って"Hello, {name}!"というメッセージを出力します。
 *
 * @param name - 名前
 * @example
 *
 * ```js
 * greet("UnJS"); // Hello, UnJS!
 * ```
 */
export const hello = (name: string) => {
  consola.info(`Hello, ${name}!`);
};
