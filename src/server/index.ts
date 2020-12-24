import { inflections } from 'inflected';
import { createServer } from 'miragejs';

import { HeroSeed, PowerSeed, Seed } from './seeds';

export function startServer() {

  const seeds: Seed[] = [
    new HeroSeed(),
    new PowerSeed(),
  ];

  inflections('en', inflect => {
    seeds.forEach(seed => inflect.irregular(seed.inflector.singular, seed.inflector.plural));
  });

  return createServer({
    models: seeds.reduce((models, seed) =>  Object.assign(models, seed.model), {}),

    seeds(server) {
      seeds.forEach(seed => seed.seeds(server));
    },

    routes() {
      seeds.forEach(seed => seed.routes(this));
    },
  });
}
