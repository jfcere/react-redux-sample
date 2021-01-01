import { Model, Server } from 'miragejs';

import { Theme } from '../../core/models';
import { Seed } from './seed';

interface ThemeDto {
  id: number;
  theme: string;
  selected: boolean;
}

export class ThemeSeed extends Seed {

  private readonly initialSeed: ThemeDto[] = [
    { id: 1, theme: Theme.Light, selected: true },
    { id: 2, theme: Theme.Dark, selected: false },
  ];

  inflector = {
    singular: 'theme',
    plural: 'themes',
  };

  model = {
    [this.collectionName]: Model.extend<Partial<ThemeDto>>({}),
  };

  seeds(server: Server): void {
    const themes = this.getFromStorage<ThemeDto[]>() || this.initialSeed;
    themes.forEach(theme => server.create(this.collectionName, theme as object));
  }

  routes(server: Server): void {
    server.get('/api/theme', (schema) => {
      return schema.findBy(this.collectionName, { selected: true } as object)?.attrs || {};
    });

    server.post('/api/theme', (schema, request) => {
      const theme = request.requestBody;
      // update selected property
      const documents = schema.all(this.collectionName).models;
      documents.forEach(document => document.update({ selected: document.attrs.theme === theme }));
      // store collection
      this.setToStorage(schema);
      // return selected theme
      return schema.findBy(this.collectionName, { selected: true } as object)?.attrs || {};
    });
  }
}
