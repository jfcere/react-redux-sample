import { Model, Server } from 'miragejs';

import { Power } from '../../hero/models';
import { Seed } from './seed';

export class PowerSeed extends Seed {

  private readonly initialSeed: Power[] = [
    { id: 1, name: 'Intangibility' },
    { id: 2, name: 'Force Field' },
    { id: 3, name: 'Mind Control' },
    { id: 4, name: 'Superhuman Intelligence' },
    { id: 5, name: 'Superhuman Agility' },
    { id: 6, name: 'Time Manipulation' },
    { id: 7, name: 'Teleportation' },
    { id: 8, name: 'Precognition' },
    { id: 9, name: 'Wall Crawling' },
    { id: 10, name: 'Atmokinesis' },
    { id: 11, name: 'Omnilinguilism' },
    { id: 12, name: 'Superhuman Speed' },
    { id: 13, name: 'Telepathy' },
    { id: 14, name: 'Night Vision' },
    { id: 15, name: 'Time Travel' },
    { id: 16, name: 'Invulnerability' },
    { id: 17, name: 'Water Breathing' },
    { id: 18, name: 'Superhuman Endurance' },
    { id: 19, name: 'Healing' },
    { id: 20, name: 'Superhuman Strength' },
    { id: 21, name: 'Invincibility' },
    { id: 22, name: 'Flying' },
  ];

  public inflector = {
    singular: 'power',
    plural: 'powers',
  };

  public model = {
    [this.collectionName]: Model.extend<Partial<Power>>({}),
  };

  seeds(server: Server): void {
    this.initialSeed.forEach(power => server.create(this.collectionName, power as object));
  }

  routes(server: Server): void {
    server.get('/api/powers', (schema) => {
      return schema.all(this.collectionName).models;
    });
  }
}
