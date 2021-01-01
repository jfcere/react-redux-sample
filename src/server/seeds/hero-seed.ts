import { Model, Server } from 'miragejs';

import { Hero } from '../../hero/models';
import { Seed } from './seed';

export class HeroSeed extends Seed {

  private readonly initialSeed: Hero[] = [
    { id: 1, name: 'Captain America', powerId: 5, quote: `You can't justify murder by masking it with a cause.` },
    { id: 2, name: 'Cat Woman', powerId: 14, quote: `Like the view? It's the only thing you'll be catching tonight.` },
    { id: 3, name: 'Flash', powerId: 12, quote: `Life doesn't give us purpose. We give life purpose.` },
    { id: 4, name: 'Spiderman', powerId: 9, quote: `With great power comes great responsability.` },
    { id: 5, name: 'Robin', powerId: 4, quote: `Holy funny bone.` },
  ];

  inflector = {
    singular: 'hero',
    plural: 'heroes',
  };

  model = {
    [this.collectionName]: Model.extend<Partial<Hero>>({}),
  };

  seeds(server: Server): void {
    const heroes = this.getFromStorage<Hero[]>() || this.initialSeed;
    heroes.forEach(hero => server.create(this.collectionName, hero as object));
  }

  routes(server: Server): void {
    server.get('/api/heroes', (schema) => {
      return schema.all(this.collectionName).models;
    });

    server.delete('/api/heroes/:id', (schema, request) => {
      const id = request.params.id;
      const hero = schema.find(this.collectionName, id);
      hero?.destroy();
      this.setToStorage(schema);
      return hero?.attrs || {};
    });

    server.post('/api/heroes', (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      const id = schema.create(this.collectionName, { ...attrs, id: null }).id;
      this.setToStorage(schema);
      return schema.find(this.collectionName, id)?.attrs || {};
    });

    server.put('/api/heroes/:id', (schema, request) => {
      const id = request.params.id;
      const attrs = JSON.parse(request.requestBody) as Hero;
      const hero = schema.find(this.collectionName, id);
      hero?.update(attrs);
      this.setToStorage(schema);
      return hero?.attrs || {};
    });
  }
}
