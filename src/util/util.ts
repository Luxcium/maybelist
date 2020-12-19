// ==== function ==========================================| promisseOf<V> |====≈
/**
 *  Value<V> | Promise<Value<V>>: value or Promise of value: Either a
 * value V or promise of a value V get a Promise of value V.
 *
 * @param value
 */

export async function promiseOf<V>(value: V | Promise<V>): Promise<V> {
  return Promise.resolve(value).then(async x => x);
}
