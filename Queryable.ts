import { Id } from './';

export type QueryableId = Id<Queryable, number>;

export default class Queryable {
  get columns(): Array<string> {
    return Reflect.ownKeys(this)
      .filter(key => {
        const value = this[key];
        if (value === undefined || value === null) {
          return false;
        }
        if (typeof key === 'string' && key[0] === '_') {
          return false;
        }
        return typeof this[key] !== 'function';
      })
      .map(key => String(key));
  }

  get columnValues() {
    return this.columns.map(column => this[column]);
  }

  get ownKeys() {
    return Reflect.ownKeys(this).filter(key => {
      const value = this[key];
      if (value === undefined || value === null) {
        return false;
      }
      if (typeof key === 'string' && key[0] === '_') {
        return false;
      }
      return typeof this[key] !== 'function';
    });
  }

  get upsertKeys() {
    return this.ownKeys.filter(key => key !== 'id');
  }
}
