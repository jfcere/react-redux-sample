import { inflections } from 'inflected';
import { createServer, Model } from 'miragejs';
import { AnyRegistry } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';

import { Hero, Power } from '../hero/models';
import heroSeed from './seeds/hero';
import powerSeed from './seeds/power';

function getFromStorage<T>(collection: string): T[] | null {
  const json = localStorage.getItem(collection);
  return json ? JSON.parse(json) : null;
}

function setToStorage(collection: string, schema: Schema<AnyRegistry>) {
  localStorage.setItem(collection, JSON.stringify(schema.all(collection).models));
}

export function startServer() {
  const heroCollection = 'hero';
  const powerCollection = 'power';

  inflections('en', inflect => {
    inflect.irregular('hero', 'heroes');
    inflect.irregular('power', 'powers');
  });

  return createServer({
    models: {
      [heroCollection]: Model.extend<Partial<Hero>>({}),
      [powerCollection]: Model.extend<Partial<Power>>({}),
    },

    seeds(server) {
      // hero
      const heroes = getFromStorage<Hero>(heroCollection) || heroSeed;
      heroes.forEach(hero => server.create(heroCollection, hero as object));

      // power
      const powers = powerSeed;
      powers.forEach(power => server.create(powerCollection, power as object));
    },

    routes() {
      // heroes
      this.get('/api/heroes', (schema) => {
        return schema.all(heroCollection).models;
      });

      this.delete('/api/heroes/:id', (schema, request) => {
        const id = request.params.id;
        const hero = schema.find(heroCollection, id);
        hero?.destroy();
        setToStorage(heroCollection, schema);
        return hero?.attrs || {};
      });

      this.post('/api/heroes', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        const id = schema.create(heroCollection, { ...attrs, id: null }).id;
        setToStorage(heroCollection, schema);
        return schema.find(heroCollection, id)?.attrs || {};
      });

      this.put('/api/heroes/:id', (schema, request) => {
        const id = request.params.id;
        const attrs = JSON.parse(request.requestBody) as Hero;
        const hero = schema.find(heroCollection, id);
        hero?.update(attrs);
        setToStorage(heroCollection, schema);
        return hero?.attrs || {};
      });

      // powers
      this.get('/api/powers', (schema) => {
        return schema.all(powerCollection).models;
      });
    },
  });
}
