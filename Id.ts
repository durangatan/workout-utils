/*
 * A Custom type for model-specific ids.
 *
 *  Usage:  type Id = Id<'AccountId', id>;
 */

export type Id<K, T> = T & { __TYPE__: K };

export type WithId<T> = {
  id: Id<T, number>;
};
