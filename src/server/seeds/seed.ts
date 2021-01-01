import { Server } from 'miragejs';
import { AnyRegistry, ModelDefinition } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';

export abstract class Seed {

  abstract inflector: { singular: string, plural: string };
  abstract model: Record<string, ModelDefinition<any>>;
  abstract seeds(server: Server): void;
  abstract routes(server: Server): void;

  get collectionName() {
    return this.inflector.singular;
  }

  getFromStorage<T>(): T | null {
    const json = localStorage.getItem(this.collectionName);
    return json ? JSON.parse(json) : null;
  }

  setToStorage(schema: Schema<AnyRegistry>) {
    localStorage.setItem(this.collectionName, JSON.stringify(schema.all(this.collectionName).models));
  }
}

