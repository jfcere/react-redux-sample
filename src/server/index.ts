import { inflections } from 'inflected';
import { createServer, Model } from 'miragejs';
import { Hero, Power } from '../hero/models';

// tslint:disable: max-line-length
export function makeServer() {
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
      server.create(heroCollection, { id: 1, name: 'Captain America', powerId: 5, quote: `You can't justify murder by masking it with a cause.` } as object);
      server.create(heroCollection, { id: 2, name: 'Cat Woman', powerId: 14, quote: `Like the view? It's the only thing you'll be catching tonight.` } as object);
      server.create(heroCollection, { id: 3, name: 'Flash', powerId: 12, quote: `Life doesn't give us purpose. We give life purpose.` } as object);
      server.create(heroCollection, { id: 4, name: 'Spiderman', powerId: 9, quote: `With great power comes great responsability.` } as object);
      server.create(heroCollection, { id: 5, name: 'Robin', powerId: 4, quote: `Holy funny bone.` } as object);

      // power
      server.create(powerCollection, { id: 1, name: 'Intangibility' } as object);
      server.create(powerCollection, { id: 2, name: 'Force Field' } as object);
      server.create(powerCollection, { id: 3, name: 'Mind Control' } as object);
      server.create(powerCollection, { id: 4, name: 'Superhuman Intelligence' } as object);
      server.create(powerCollection, { id: 5, name: 'Superhuman Agility' } as object);
      server.create(powerCollection, { id: 6, name: 'Time Manipulation' } as object);
      server.create(powerCollection, { id: 7, name: 'Teleportation' } as object);
      server.create(powerCollection, { id: 8, name: 'Precognition' } as object);
      server.create(powerCollection, { id: 9, name: 'Wall Crawling' } as object);
      server.create(powerCollection, { id: 10, name: 'Atmokinesis' } as object);
      server.create(powerCollection, { id: 11, name: 'Omnilinguilism' } as object);
      server.create(powerCollection, { id: 12, name: 'Superhuman Speed' } as object);
      server.create(powerCollection, { id: 13, name: 'Telepathy' } as object);
      server.create(powerCollection, { id: 14, name: 'Night Vision' } as object);
      server.create(powerCollection, { id: 15, name: 'Time Travel' } as object);
      server.create(powerCollection, { id: 16, name: 'Invulnerability' } as object);
      server.create(powerCollection, { id: 17, name: 'Water Breathing' } as object);
      server.create(powerCollection, { id: 18, name: 'Superhuman Endurance' } as object);
      server.create(powerCollection, { id: 19, name: 'Healing' } as object);
      server.create(powerCollection, { id: 20, name: 'Superhuman Strength' } as object);
      server.create(powerCollection, { id: 21, name: 'Invincibility' } as object);
      server.create(powerCollection, { id: 22, name: 'Flying' } as object);
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
        return hero?.attrs || {};
      });

      this.post('/api/heroes', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        attrs.id = null;
        const id = schema.create(heroCollection, attrs).id;
        return schema.find(heroCollection, id)?.attrs || {};
      });

      this.put('/api/heroes/:id', (schema, request) => {
        const id = request.params.id;
        const attrs = JSON.parse(request.requestBody) as Hero;
        const hero = schema.find(heroCollection, id);
        hero?.update(attrs);
        return hero || {};
      });

      // powers
      this.get('/api/powers', (schema) => {
        return schema.all(powerCollection).models;
      });
    },
  });

}
